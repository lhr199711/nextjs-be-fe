'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect } from 'react';
import { Button, Flex, Table, Image } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { BookItem } from '@/types/book';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const columns: TableColumnsType<BookItem> = [
  { title: 'name', dataIndex: 'name' },
  { title: 'author', dataIndex: 'author' },
  { title: 'description', dataIndex: 'description' },
  { title: 'createdAt', dataIndex: 'createdAt' },
  { title: 'publishAt', dataIndex: 'publishAt' },
  {
    title: 'cover',
    dataIndex: 'cover',
    render: (text) => <Image width={200} alt="basic" src={text} />
  },
  { title: 'stock', dataIndex: 'stock' }
];

export default function Home() {
  const [bookList, setBookList] = useState<BookItem[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<BookItem> = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  useEffect(() => {
    bookApi.getBookList().then((res) => {
      setBookList(res.data);
    });
  }, []);

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary">创建书籍</Button>
      </Flex>
      <Table<BookItem> rowSelection={rowSelection} columns={columns} dataSource={bookList} />
    </Flex>
  );
}
