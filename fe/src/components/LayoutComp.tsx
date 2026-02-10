'use client';
import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, Dropdown, Space } from 'antd';
import styles from './layoutcomp.module.css';
import { useRouter } from 'next/navigation';
import { DownOutlined } from '@ant-design/icons';
import api from '@/api/login';

const menuList: MenuProps['items'] = [
  {
    key: 'book-manage',
    label: `书籍管理`,
    children: [
      { label: '已读书目', key: '/book/list' },
      { label: '想读书目', key: '/book/wishlist' }
    ]
  }
];

export default function LayoutComp({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const menuClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };
  return (
    <Layout>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <span className={styles.title}>Harry的成长之路</span>
          <Dropdown
            menu={{
              items: [
                {
                  label: '登出',
                  key: '0',
                  onClick: () => {
                    api.logout().then(() => {
                      localStorage.removeItem('token');
                      router.push('/login');
                    });
                  }
                }
              ]
            }}
          >
            <a style={{ color: '#409eff' }} onClick={(e) => e.preventDefault()}>
              <Space>
                admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/book/list']}
            defaultOpenKeys={['book-manage']}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={menuList}
            onClick={menuClick}
          />
        </Layout.Sider>
        <Layout style={{ padding: '16px' }}>
          <Layout.Content
            style={{
              padding: 0,
              margin: 0,
              height: 'calc(100vh - 96px)'
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
