'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect } from 'react';
import { Button, Flex, Table, Image, Dropdown, Space } from 'antd';
import type { TableColumnsType, TableProps, MenuProps } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { BookItem } from '@/types/book';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const items: MenuProps['items'] = [
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

const menuProps = {
  items,
  onClick: () => {}
};

const columns: TableColumnsType<BookItem> = [
  { title: 'name', dataIndex: 'name' },
  { title: 'author', dataIndex: 'author' },
  {
    title: 'description',
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
  { title: 'createdAt', dataIndex: 'createdAt' },
  { title: 'publishAt', dataIndex: 'publishAt' },
  {
    title: 'cover',
    dataIndex: 'cover',
    render: (text) => <Image width={200} alt="basic" src={text} />
  },
  { title: 'stock', dataIndex: 'stock' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space wrap>
        <Space.Compact>
          <Button type="primary">操作</Button>
          <Dropdown menu={menuProps} placement="bottomRight">
            <Button type="primary" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space.Compact>
      </Space>
    )
  }
];

export default function Home() {
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
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary">创建书籍</Button>
      </Flex>
      <Table<BookItem>
        loading={tableLoading}
        scroll={{ y: 'calc(100vh - 250px)' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={bookList}
      />
    </Flex>
  );
}
