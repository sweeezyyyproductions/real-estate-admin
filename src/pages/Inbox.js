// src/pages/Inbox.js
import React, { useState } from 'react';
import { Button } from 'antd';
import InboxDrawer from '../components/InboxDrawer';

const Inbox = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <h1>Inbox Page</h1>
      <Button type="primary" onClick={showDrawer}>
        Open Inbox
      </Button>
      <InboxDrawer visible={drawerVisible} onClose={closeDrawer} />
    </div>
  );
};

export default Inbox;
