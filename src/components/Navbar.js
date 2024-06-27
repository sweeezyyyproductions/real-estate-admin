import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Avatar, Dropdown } from 'antd';
import { InboxOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = ({ showDrawer }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu theme="light" mode="horizontal" style={{ justifyContent: 'flex-end' }}>
      <Menu.Item key="listings">
        <Link to="/listings">Listings</Link>
      </Menu.Item>
      <Menu.Item key="inbox" onClick={showDrawer}>
        <InboxOutlined />
      </Menu.Item>
      <Menu.Item key="avatar">
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
