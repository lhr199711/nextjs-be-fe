import React, { useRef, useEffect } from 'react';
import { Graph } from '@antv/x6';

// 转换为 React 函数组件（TS 类型标注完整）
const Example = () => {
  // 1. 用 useRef 替代类组件的实例属性，存储容器 DOM 元素
  const containerRef = useRef<HTMLDivElement>(null);
  // 存储 graph 实例，避免重复创建
  const graphRef = useRef<Graph | null>(null);

  // 2. 用 useEffect 替代 componentDidMount，组件挂载后初始化图形
  useEffect(() => {
    // 确保容器 DOM 存在
    if (!containerRef.current) return;

    const data = {
      nodes: [
        {
          id: 'node1',
          shape: 'rect',
          x: 40,
          y: 40,
          width: 100,
          height: 40,
          label: 'hello',
          attrs: {
            body: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6
            }
          }
        },
        {
          id: 'node2',
          shape: 'rect',
          x: 160,
          y: 180,
          width: 100,
          height: 40,
          label: 'world',
          attrs: {
            body: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6
            }
          }
        }
      ],
      edges: [
        {
          shape: 'edge',
          source: 'node1',
          target: 'node2',
          label: 'x6',
          attrs: {
            line: {
              stroke: '#8f8f8f',
              strokeWidth: 1
            }
          }
        }
      ]
    };
    console.log(containerRef.current, 'containerRef.currentcontainerRef.current');

    // 创建 Graph 实例并初始化
    const graph = new Graph({
      container: containerRef.current,
      width: containerRef.current.clientWidth || 500,
      height: containerRef.current.clientHeight || 300,
      background: {
        color: '#F2F7FA'
      }
    });

    // 存储实例到 ref，方便后续操作（如卸载时清理）
    graphRef.current = graph;

    // 渲染图形数据并居中
    graph.fromJSON(data);
    graph.centerContent();

    // 3. 组件卸载时清理 Graph 实例，避免内存泄漏
    return () => {
      if (graphRef.current) {
        graphRef.current.dispose(); // 销毁图形实例
        graphRef.current = null;
      }
    };
  }, []); // 空依赖数组 = 仅在组件挂载时执行一次

  // 渲染容器（ref 绑定到 DOM 元素）
  return <div ref={containerRef} style={{ width: '100%', height: '700px' }} />;
};

export default Example;
