import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const { Header, Content } = Layout;

const CustomLayout = ({ children, showDrawer }) => (
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }}>
      <Navbar showDrawer={showDrawer} />
    </Header>
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        {children}
      </div>
    </Content>
    <Footer />
  </Layout>
);

export default CustomLayout;

