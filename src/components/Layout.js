import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const { Content } = Layout;

const CustomLayout = ({ children, showDrawer }) => {
  return (
    <Layout>
     
      <Navbar showDrawer={showDrawer} />
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default CustomLayout;
