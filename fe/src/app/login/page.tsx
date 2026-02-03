'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useRouter } from 'next/navigation';

type LoginForm = {
  name: string;
  password: string;
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm<LoginForm>();
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = (values: LoginForm) => {
    window.localStorage.setItem('token', '123456');
    messageApi.open({
      type: 'success',
      content: '登录成功'
    });
    router.push('/book/list');
  };
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f2f5'
      }}
    >
      <Card title="登录" style={{ width: 400 }} headStyle={{ textAlign: 'center' }}>
        <Form
          onFinish={handleSubmit}
          form={form}
          layout="vertical"
          initialValues={{ name: '', password: '' }}
        >
          <Form.Item<LoginForm>
            name="name"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" autoComplete="name" />
          </Form.Item>
          <Form.Item<LoginForm>
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" autoComplete="current-password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
