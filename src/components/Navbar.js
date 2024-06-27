import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const Navbar = ({ showDrawer }) => {
  return (
    <Menu theme="light" mode="horizontal">
      <Menu.Item key="spacer" style={{ marginLeft: 'auto' }}>
        {/* This empty item will push the following items to the right */}
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/">Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/listings">Listings</Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={showDrawer}>
        <Button type="text" icon={<InboxOutlined />} />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
