'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { Button, Flex, Table, Image, Dropdown, Space, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

export default function UpdateBook() {
  const router = useRouter();
  const { bookid } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const pageType = useMemo(() => (bookid === 'null' ? 'add' : 'update'), [bookid]);
  const [form] = Form.useForm();
  const [imgUrl, setImgUrl] = useState(''); // https://pic1.zhimg.com/v2-d226d72450f0327264218a2cf5796113_r.jpg

  return (
    <div>
      <PageHeader title={pageType === 'add' ? '新建书籍' : '编辑书籍'} />
      <div>
        <Form
          form={form}
          name="bookForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          autoComplete="off"
          onFinish={(values) => {
            if (pageType === 'add') {
              let payload = {
                ...values,
                createdAt: new Date(),
                updatedAt: new Date()
              };
              bookApi.updateBook(payload).then(() => {
                messageApi.success('操作成功!');
                router.back();
              });
            }
          }}
        >
          <Form.Item
            label="书籍名称"
            name="name"
            rules={[{ required: true, message: '请输入书籍名称' }]}
          >
            <Input placeholder="请输入书籍名称" />
          </Form.Item>
          <Form.Item
            label="书籍分类"
            name="category"
            rules={[{ required: true, message: '请输入书籍分类' }]}
          >
            <Input placeholder="请输入书籍名称" />
          </Form.Item>
          <Form.Item label="作者" name="author" rules={[{ required: true, message: '请输入作者' }]}>
            <Input placeholder="请输入作者" />
          </Form.Item>

          <Form.Item
            label="封面链接"
            name="cover"
            rules={[{ required: true, message: '请输入封面图片URL' }]}
          >
            <Input
              placeholder="请输入封面图片URL"
              onBlur={() => {
                const cover = form.getFieldValue('cover');
                setImgUrl(cover);
              }}
            />
          </Form.Item>
          <Form.Item label="封面预览">
            <Image width={200} alt="basic" src={imgUrl} />
          </Form.Item>

          <Form.Item label="简介" name="description">
            <Input.TextArea placeholder="请输入书籍简介" autoSize={{ minRows: 3, maxRows: 6 }} />
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
