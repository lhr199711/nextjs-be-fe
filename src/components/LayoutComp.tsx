'use client';
import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import styles from './layoutcomp.module.css';
import { useRouter } from 'next/navigation';

const menuList: MenuProps['items'] = [
  {
    key: 'book-manage',
    label: `图书管理`,
    children: [
      { label: '图书列表', key: '/book/list' },
      { label: '图书详情', key: '/book/detail' }
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
        <div className={styles.title}>图书管理系统</div>
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
