import React from 'react';
import CustomLayout from '../components/Layout';
import { Card, Form, Input, Button, Row, Col } from 'antd';

const SellingForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <CustomLayout>
      <h1>Selling Form</h1>
      <Row justify="center">
        <Col xs={24} sm={24} md={18} lg={16} xl={12}>
          <Form
            name="selling"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Card title="Property Information">
              <Form.Item
                name="streetAddress"
                label="Street Address"
                rules={[{ required: true, message: 'Please input the street address!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please input the city!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="state"
                label="State"
                rules={[{ required: true, message: 'Please input the state!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="zipCode"
                label="Zip Code"
                rules={[{ required: true, message: 'Please input the zip code!' }]}
              >
                <Input />
              </Form.Item>
            </Card>

            <Card title="About You" style={{ marginTop: 16 }}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input />
              </Form.Item>
            </Card>

            <Card title="Selling Info" style={{ marginTop: 16 }}>
              <Form.Item
                name="timeframe"
                label="Timeframe for Selling"
                rules={[{ required: true, message: 'Please input your timeframe for selling!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="desiredPrice"
                label="Desired Selling Price"
                rules={[{ required: true, message: 'Please input your desired selling price!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="additionalDetails"
                label="Additional Details"
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Card>

            <Form.Item style={{ marginTop: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default SellingForm;

