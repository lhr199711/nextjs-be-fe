'use client';
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`
        };
      })
    };
  }
);

export default function LayoutComp({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={items2}
          />
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
