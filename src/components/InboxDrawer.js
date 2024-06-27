// src/components/InboxDrawer.js
import React, { useState } from 'react';
import { Drawer, Tabs, Badge } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import InboxMessages from './InboxMessages';

const { TabPane } = Tabs;

const InboxDrawer = ({ visible, onClose }) => {
  const [unreadCounts, setUnreadCounts] = useState({
    buyer: 5,
    seller: 3,
    query: 8,
  });

  return (
    <Drawer
      title="Inbox"
      placement="left"
      onClose={onClose}
      visible={visible}
      width={400}
    >
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={<span><Badge count={unreadCounts.buyer}><MailOutlined /> Buying</Badge></span>}
          key="1"
        >
          <InboxMessages type="buyer" />
        </TabPane>
        <TabPane
          tab={<span><Badge count={unreadCounts.seller}><MailOutlined /> Selling</Badge></span>}
          key="2"
        >
          <InboxMessages type="seller" />
        </TabPane>
        <TabPane
          tab={<span><Badge count={unreadCounts.query}><MailOutlined /> Contact Us</Badge></span>}
          key="3"
        >
          <InboxMessages type="query" />
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default InboxDrawer;
