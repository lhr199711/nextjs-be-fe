'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { Button, Flex, Table, Image, Dropdown, Space, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import AntdGraph from './components/AntdGraph';
export default function UpdateBook() {
  const router = useRouter();
  const { bookid } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const pageType = useMemo(() => (bookid === 'null' ? 'add' : 'update'), [bookid]);
  const [form] = Form.useForm();

  useEffect(() => {
    if (pageType === 'update' && bookid && typeof bookid === 'string') {
      bookApi.getBookDetail(bookid).then((res) => {
        form.setFieldsValue(res);
      });
    }
  }, [pageType, bookid, form]);

  return (
    <div>
      <PageHeader title={pageType === 'add' ? '新建书籍' : '编辑书籍'} />
      <div>
        <Form
          labelCol={{ style: { width: 120 } }}
          form={form}
          name="bookForm"
          autoComplete="off"
          onFinish={(values) => {
            let payload;
            if (pageType === 'add') {
              payload = {
                ...values,
                createdAt: new Date(),
                updatedAt: new Date()
              };
            } else {
              payload = {
                ...values,
                _id: bookid,
                createdAt: new Date(),
                updatedAt: new Date()
              };
            }
            bookApi.updateBook(payload).then(() => {
              messageApi.success('操作成功!');
              router.back();
            });
          }}
        >
          <Form.Item
            label="书籍名称"
            name="name"
            rules={[{ required: true, message: '请输入书籍名称' }]}
          >
            <Input placeholder="请输入书籍名称" />
          </Form.Item>
          <Form.Item label="作者" name="author" rules={[{ required: true, message: '请输入作者' }]}>
            <Input placeholder="请输入作者" />
          </Form.Item>

          <Form.Item
            label="简介"
            name="description"
            rules={[{ required: true, message: '这本书到底在讲什么？' }]}
          >
            <Input.TextArea
              placeholder="这本书到底在讲什么？"
              autoSize={{ minRows: 3, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item label="思维导图" name="description">
            <AntdGraph />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
            <Button type="primary" htmlType="submit">
              {pageType === 'add' ? '创建' : '保存修改'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
