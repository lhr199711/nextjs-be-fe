'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect } from 'react';
import { Button, Flex, Table, Image, Dropdown, Space, Form, Input } from 'antd';
import type { TableColumnsType, TableProps, MenuProps } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { BookItem, BookListSearchData } from '@/types/book';
import { useRouter } from 'next/navigation';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const menuItems: MenuProps['items'] = [
  {
    label: '编辑',
    key: 'edit'
  },
  {
    label: '删除',
    key: 'delete',
    danger: true
  }
];

export default function Home() {
  const router = useRouter();
  const [bookList, setBookList] = useState<BookItem[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [tableLoading, setTableLoading] = useState(false);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<BookItem> = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const getBookList = () => {
    queueMicrotask(() => setTableLoading(true));
    bookApi
      .getBookList()
      .then((res) => {
        setBookList(res.data);
      })
      .finally(() => {
        setTableLoading(false);
      });
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <Flex vertical>
      <Flex>
        <Button type="primary" onClick={() => router.push('/book/update/null')}>
          创建书籍
        </Button>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Space align="start">
            <Form.Item<BookListSearchData> label="名称" name="name">
              <Input />
            </Form.Item>

            <Form.Item<BookListSearchData> label="作者" name="author">
              <Input />
            </Form.Item>
            <Space align="start">
              <Button type="primary">搜索</Button>
              <Button>清空</Button>
            </Space>
          </Space>
        </Form>
      </Flex>
      <Table<BookItem>
        loading={tableLoading}
        scroll={{ y: 'calc(100vh - 250px)' }}
        rowSelection={rowSelection}
        columns={[
          { title: '书籍名', dataIndex: 'name' },
          { title: '作者', dataIndex: 'author' },
          {
            title: '简介',
            dataIndex: 'description',
            render: (text: string) => (
              <span
                style={{
                  display: 'inline-block',
                  maxWidth: 150,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  verticalAlign: 'middle'
                }}
                title={text}
              >
                {text}
              </span>
            )
          },
          { title: '创建时间', dataIndex: 'createdAt' },
          { title: '更新时间', dataIndex: 'updatedAt' },
          {
            title: '书籍封面',
            dataIndex: 'cover',
            render: (text) => <Image width={200} alt="basic" src={text} />
          },
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space wrap>
                <Space.Compact>
                  <Button type="primary">操作</Button>
                  <Dropdown
                    menu={{
                      items: menuItems,
                      onClick: (item) => {
                        if (item.key === 'edit') {
                          router.push(`/book/update/${record._id}`);
                        }
                      }
                    }}
                    placement="bottomRight"
                  >
                    <Button type="primary" icon={<EllipsisOutlined />} />
                  </Dropdown>
                </Space.Compact>
              </Space>
            )
          }
        ]}
        dataSource={bookList}
      />
    </Flex>
  );
}
