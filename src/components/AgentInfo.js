// Version: 1
import React from 'react';
import { Card, Form, Input, Button } from 'antd';

const AgentInfo = ({ isEditing, form, listing, showModal }) => (
  <Card title="Agent Info">
    {!isEditing ? (
      <>
        <p>{listing.agent.name}</p>
        <p>{listing.agent.number}</p>
        <Button type="primary" onClick={showModal}>
          Contact Agent
        </Button>
      </>
    ) : (
      <Form form={form} initialValues={{ agentNumber: listing.agent.number }} layout="vertical">
        <Form.Item name="agentNumber" label="Agent Phone Number" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    )}
  </Card>
);

export default AgentInfo;
