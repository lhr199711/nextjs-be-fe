'use client';
import api from '@/api/login';
import { useState, useMemo } from 'react';
import { Form, Input, Button, Card, message, Tabs } from 'antd';
import { useRouter } from 'next/navigation';
import { UserItem } from '@/types/user';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm<UserItem>();
  const [messageApi, contextHolder] = message.useMessage();
  const [tabKey, setTabKey] = useState('login');

  const formItems = useMemo(() => {
    return tabKey === 'login'
      ? { name: '', password: '' }
      : { name: '', password: '', password2: '' };
  }, [tabKey]);
  const handleSubmit = () => {
    if (tabKey === 'register') {
      form.validateFields().then((values) => {
        api
          .userRegister({ name: values.name, password: values.password })
          .then(() => {
            setTabKey('login');
            messageApi.open({
              type: 'success',
              content: '注册成功'
            });
          })
          .catch((err) => {
            messageApi.open({
              type: 'error',
              content: err.message
            });
          });
      });
    } else {
      window.localStorage.setItem('token', '123456');
      messageApi.open({
        type: 'success',
        content: '登录成功'
      });
      router.push('/book/list');
    }
  };
  const tabChange = (key: string) => {
    setTabKey(key);
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
      <Card style={{ width: 500 }}>
        <Tabs
          onChange={tabChange}
          type="card"
          items={[
            {
              key: 'login',
              label: '登录'
            },
            {
              key: 'register',
              label: '注册'
            }
          ]}
        />
        <Form onFinish={handleSubmit} form={form} layout="vertical" initialValues={formItems}>
          <Form.Item<UserItem>
            name="name"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" autoComplete="name" />
          </Form.Item>
          <Form.Item<UserItem>
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" autoComplete="current-password" />
          </Form.Item>
          {tabKey === 'register' && (
            <Form.Item<UserItem>
              name="password2"
              label="确认密码"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="请输入密码" autoComplete="current-password" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {tabKey === 'register' ? '注册' : '登录'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
