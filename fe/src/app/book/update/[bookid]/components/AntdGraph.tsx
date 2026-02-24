import React, { useRef, useEffect, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Graph, Cell, Node, Path, Keyboard, Selection } from '@antv/x6';
import Hierarchy from '@antv/hierarchy';
import { register } from '@antv/x6-react-shape';
import { Button, Input } from 'antd';
const { TextArea } = Input;
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
interface MindMapData {
  id: string;
  type: 'topic' | 'topic-branch';
  label: string;
  width: number;
  height: number;
  children?: MindMapData[];
}
export interface AntdGraphRefHandle {
  getGraphData: () => MindMapData;
}

interface HierarchyResult {
  id: string;
  x: number;
  y: number;
  data: MindMapData;
  children?: HierarchyResult[];
}

// 转换为 React 函数组件（TS 类型标注完整）
const Example = forwardRef<AntdGraphRefHandle, { data: unknown }>((props: any, ref: any) => {
  const data = props.data;
  // 1. 用 useRef 替代类组件的实例属性，存储容器 DOM 元素
  const containerRef = useRef<HTMLDivElement>(null);
  // 存储 graph 实例，避免重复创建
  const graphRef = useRef<Graph | null>(null);

  const graphData = useMemo(() => {
    let data2 = JSON.parse(JSON.stringify(data));

    if (!data2) {
      data2 = {
        id: '1',
        type: 'topic',
        label: '中心主题',
        width: 160,
        height: 50,
        children: [
          {
            id: '1-1',
            type: 'topic-branch',
            label: `讲了些什么(通过哪些理论、说明了哪些道理，必须具体)`,
            width: 400,
            height: 40
          },
          {
            id: '1-2',
            type: 'topic-branch',
            label: '怎么讲的(是怎么得到结论A的，如何从A->B->C)',
            width: 400,
            height: 40
          },
          {
            id: '1-3',
            type: 'topic-branch',
            label: '是全部内容都有道理，还是部分有道理？',
            width: 400,
            height: 40
          },
          {
            id: '1-4',
            type: 'topic-branch',
            label: `对我有什么用？
1.实用书（能否指导我的行为改变）
2.理论书（能否更新认知框架）
3.小说（能否加深对人性的理解）`,
            width: 400,
            height: 100
          }
        ]
      };
    }
    return data2;
  }, [data]);

  useImperativeHandle(ref, () => ({
    // 暴露获取状态的方法
    getGraphData: () => graphData
    // 也可以暴露修改状态的方法
  }));
  const onBlur = (e: React.FocusEvent<HTMLTextAreaElement>, node: Node) => {
    // 根据 label 内容自动生成宽高
    const value = e.target.value;
    // 处理多行文本情况，大致估算宽度 (最长行字符数*每字符宽度)，高度为行数*每行高度，加一些 padding
    const lines = value.split('\n');
    const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const paddingWidth = 40; // 可调优
    const paddingHeight = 24; // 可调优
    const charWidth = 14; // 估算每个字符的宽度
    const lineHeight = 20; // 每行高度
    const newWidth = Math.max(60, Math.min(400, longestLine * charWidth + paddingWidth)); // 限制最小最大宽度
    const newHeight = Math.max(30, Math.min(300, lines.length * lineHeight + paddingHeight)); // 限制最小最大高度
    node?.setSize?.(newWidth, newHeight);
    node?.setData?.({ ...node.getData(), label: e.target.value });
    // 同步更新 graphData 中的状态
    const res = findItem(graphData, node.id);
    if (res && res.node) {
      res.node.label = value;
      res.node.width = newWidth;
      res.node.height = newHeight;
    }
  };

  const handleAdd = (id: string, type: string) => {
    if (addChildNode(id, type)) {
      render();
    }
  };
  const handleDelete = (id: string) => {
    if (removeNode(id)) {
      render();
    }
  };
  const NodeComponent = ({ node }: { node: Node }) => {
    const label = node?.getData?.()?.label || '';
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <PlusCircleOutlined
          style={{ position: 'absolute', left: '50%', top: '-14px' }}
          onClick={() => handleAdd(node.id, 'topic-branch')}
        />
        <MinusCircleOutlined
          style={{ position: 'absolute', left: '50%', bottom: '-14px' }}
          onClick={() => handleDelete(node.id)}
        />
        <TextArea
          defaultValue={label}
          onBlur={(e) => onBlur(e, node)}
          style={{ height: '100%', resize: 'none' }}
        />
      </div>
    );
  };

  register({
    shape: 'custom-basic-react-node',
    width: 100,
    height: 100,
    effect: ['data'],
    component: NodeComponent
  });

  const render = () => {
    const graph = graphRef.current;
    if (!graph) return;
    const result: HierarchyResult = Hierarchy.mindmap(graphData, {
      direction: 'H',
      getHeight(d: MindMapData) {
        return d.height;
      },
      getWidth(d: MindMapData) {
        return d.width;
      },
      getHGap() {
        return 40;
      },
      getVGap() {
        return 20;
      },
      getSide: () => {
        return 'right';
      }
    });
    const cells: Cell[] = [];
    const traverse = (hierarchyItem: HierarchyResult) => {
      if (hierarchyItem) {
        const { data, children } = hierarchyItem;
        cells.push(
          graph.createNode({
            id: data.id,
            shape: data.type === 'topic-branch' ? 'custom-basic-react-node' : 'topic',
            x: hierarchyItem.x,
            y: hierarchyItem.y,
            width: data.width,
            height: data.height,
            data: {
              label: data.label
            },
            label: data.label,
            type: data.type
          })
        );
        if (children) {
          children.forEach((item: HierarchyResult) => {
            const { id, data } = item;
            cells.push(
              graph.createEdge({
                shape: 'mindmap-edge',
                source: {
                  cell: hierarchyItem.id,
                  anchor: {
                    name: 'center',
                    args: {
                      dx: '25%'
                    }
                  }
                },
                target: {
                  cell: id,
                  anchor: {
                    name: 'left'
                  }
                }
              })
            );
            traverse(item);
          });
        }
      }
    };
    traverse(result);
    graph.resetCells(cells);
    graph.centerContent();
  };

  useEffect(() => {
    render();
  }, [graphData]);

  const findItem = (
    obj: MindMapData,
    id: string
  ): {
    parent: MindMapData | null;
    node: MindMapData | null;
  } | null => {
    if (obj.id === id) {
      return {
        parent: null,
        node: obj
      };
    }
    const { children } = obj;
    if (children) {
      for (let i = 0, len = children.length; i < len; i += 1) {
        const res = findItem(children[i], id);
        if (res) {
          return {
            parent: res.parent || obj,
            node: res.node
          };
        }
      }
    }
    return null;
  };

  const addChildNode = (id: string, type: string) => {
    const res = findItem(graphData, id);
    const dataItem = res?.node;
    if (dataItem) {
      let item: MindMapData | null = null;
      const length = dataItem.children ? dataItem.children.length : 0;
      if (type === 'topic') {
        item = {
          id: `${id}-${length + 1}`,
          type: 'topic-branch',
          label: `分支主题${length + 1}`,
          width: 100,
          height: 40
        };
      } else if (type === 'topic-branch') {
        item = {
          id: `${id}-${length + 1}`,
          type: 'topic-branch',
          label: `子主题${length + 1}`,
          width: 100,
          height: 40
        };
      }
      if (item) {
        if (dataItem.children) {
          dataItem.children.push(item);
        } else {
          dataItem.children = [item];
        }
        return item;
      }
    }
    return null;
  };

  const removeNode = (id: string) => {
    const res = findItem(graphData, id);
    const dataItem = res?.parent;
    if (dataItem && dataItem.children) {
      const { children } = dataItem;
      const index = children.findIndex((item) => item.id === id);
      return children.splice(index, 1);
    }
    return null;
  };

  // 2. 用 useEffect 替代 componentDidMount，组件挂载后初始化图形
  useEffect(() => {
    // 确保容器 DOM 存在
    if (!containerRef.current) return;

    // 中心主题或分支主题
    Graph.registerNode(
      'topic',
      {
        inherit: 'rect',
        markup: [
          {
            tagName: 'rect',
            selector: 'body'
          },
          {
            tagName: 'image',
            selector: 'addimg'
          },
          {
            tagName: 'image',
            selector: 'deleteimg'
          },
          {
            tagName: 'text',
            selector: 'label'
          }
        ],
        attrs: {
          body: {
            rx: 6,
            ry: 6,
            stroke: '#5F95FF',
            fill: '#EFF4FF',
            strokeWidth: 1
          },
          addimg: {
            ref: 'body',
            refX: '50%',
            refY: '0%',
            refY2: -20,
            width: 20,
            height: 20,
            'xlink:href':
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48cGF0aCBkPSJNOC44MTcgNS42MjN2Ni43NTZhLjU1OC41NTggMCAwMDEuMTE2IDBWNS42MjNhLjU1OC41NTggMCAxMC0xLjExNiAweiIvPjwvZz48L3N2Zz4=',
            event: 'add:topic',
            class: 'topic-image'
          },
          deleteimg: {
            ref: 'body',
            refX: '50%',
            refY: '100%',
            refY2: 0,
            width: 20,
            height: 20,
            'xlink:href':
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48L2c+PC9zdmc+',
            event: 'delete:topic',
            class: 'topic-image'
          },
          label: {
            fontSize: 14,
            fill: '#262626'
          }
        }
      },
      true
    );

    // 连接器
    Graph.registerConnector(
      'mindmap',
      (sourcePoint, targetPoint, routerPoints, options) => {
        const midX = sourcePoint.x + 10;
        const midY = sourcePoint.y;
        const ctrX = (targetPoint.x - midX) / 5 + midX;
        const ctrY = targetPoint.y;
        const pathData = `
     M ${sourcePoint.x} ${sourcePoint.y}
     L ${midX} ${midY}
     Q ${ctrX} ${ctrY} ${targetPoint.x} ${targetPoint.y}
    `;
        return options.raw ? Path.parse(pathData) : pathData;
      },
      true
    );

    // 边
    Graph.registerEdge(
      'mindmap-edge',
      {
        inherit: 'edge',
        connector: {
          name: 'mindmap'
        },
        attrs: {
          line: {
            targetMarker: '',
            stroke: '#A2B1C3',
            strokeWidth: 2
          }
        },
        zIndex: 0
      },
      true
    );

    // 创建 Graph 实例并初始化
    const graph = new Graph({
      container: containerRef.current,
      connecting: {
        connectionPoint: 'anchor'
      },
      width: containerRef.current.clientWidth || 500,
      height: containerRef.current.clientHeight || 300,
      background: {
        color: '#F2F7FA'
      }
    });
    graph.use(new Selection());
    graph.use(new Keyboard());

    graph.on('add:topic', ({ node }: { node: Node }) => {
      const { id } = node;
      const type = node.prop('type');
      if (addChildNode(id, type)) {
        render();
      }
    });
    graph.on('delete:topic', ({ node }: { node: Node }) => {
      const { id } = node;
      if (removeNode(id)) {
        render();
      }
    });
    // 存储实例到 ref，方便后续操作（如卸载时清理）
    graphRef.current = graph;

    // 渲染图形数据并居中
    render();

    // 3. 组件卸载时清理 Graph 实例，避免内存泄漏
    return () => {
      if (graphRef.current) {
        graphRef.current.dispose(); // 销毁图形实例
        graphRef.current = null;
      }
    };
  }, []); // 空依赖数组 = 仅在组件挂载时执行一次

  // 通过鼠标滚轮控制缩放，需在 Graph 初始化后绑定事件
  useEffect(() => {
    const graph = graphRef.current;
    if (!graph || !containerRef.current) return;
    // 监听alt+鼠标滚轮，调整缩放比例
    const handleAltWheel = (event: WheelEvent) => {
      if (event.altKey) {
        event.preventDefault();
        const currentZoom = graph.zoom();
        const zoomFactor = 0.1;
        if (event.deltaY < 0) {
          graph.zoomTo(currentZoom + zoomFactor);
        } else {
          graph.zoomTo(currentZoom - zoomFactor);
        }
      }
    };

    const dom = containerRef.current;
    dom.addEventListener('wheel', handleAltWheel, { passive: false });
    return () => {
      dom.removeEventListener('wheel', handleAltWheel);
    };
  }, [graphRef]);

  // 渲染容器（ref 绑定到 DOM 元素）
  return <div ref={containerRef} style={{ width: '100%', height: '800px' }} />;
});
Example.displayName = 'Example';
export default Example;
