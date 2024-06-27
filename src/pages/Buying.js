import React from 'react';
import CustomLayout from '../components/Layout';
import { Card, Form, Input, Button, Select, Slider, InputNumber, Row, Col } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';

const { Option } = Select;

const BuyingForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <CustomLayout>
      <h1>Buying Form</h1>
      <Row justify="center">
        <Col xs={24} sm={24} md={18} lg={16} xl={12}>
          <Form
            name="buying"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            initialValues={{
              moveInTimeframe: 'just-browsing',
              buyingReason: 'job-relocation',
              priceRange: [0, 500000],
            }}
          >
            <Card title="Property Basics">
              <Form.Item name="propertyType" label="Type of Property">
                <Select placeholder="Select a property type">
                  <Option value="single-family">Single-Family Home</Option>
                  <Option value="condo">Condominium</Option>
                  <Option value="townhouse">Townhouse</Option>
                  <Option value="apartment">Apartment</Option>
                  {/* Add more options as needed */}
                </Select>
              </Form.Item>
              <Form.Item name="area" label="Areas">
                <Select placeholder="Select an area">
                  <Option value="henderson">Henderson</Option>
                  <Option value="summerlin">Summerlin</Option>
                  <Option value="north-vegas">North Las Vegas</Option>
                  <Option value="boulder-city">Boulder City</Option>
                  {/* Add more options as needed */}
                </Select>
              </Form.Item>
              <Form.Item name="priceRange" label="Price Range">
                <Slider
                  range
                  step={10000}
                  min={0}
                  max={1000000}
                  tooltip={{ formatter: (value) => `$${value}` }}
                />
              </Form.Item>
              <Form.Item name="beds" label="Minimum Number of Beds">
                <InputNumber min={0} max={10} />
              </Form.Item>
              <Form.Item name="baths" label="Minimum Number of Baths">
                <InputNumber min={0} max={10} />
              </Form.Item>
            </Card>

            <Card title="Features" style={{ marginTop: 16 }}>
              <Form.Item name="features" label="Tell us more about any home or neighborhood features that are important to you and your family">
                <Input.TextArea rows={4} />
              </Form.Item>
            </Card>

            <Card title="About You" style={{ marginTop: 16 }}>
              <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="moveInTimeframe" label="When are you looking to move in?">
                <Select>
                  <Option value="just-browsing">Just Browsing</Option>
                  <Option value="less-than-one-month">Buy.. less than one month</Option>
                  <Option value="one-to-three-months">Buy.. 1-3 months</Option>
                  <Option value="three-to-six-months">Buy.. 3-6 months</Option>
                  <Option value="six-plus-months">Buy.. 6+ months</Option>
                </Select>
              </Form.Item>
              <Form.Item name="buyingReason" label="What is your main reason for buying?">
                <Select>
                  <Option value="job-relocation">Job Relocation</Option>
                  <Option value="vacation">Vacation</Option>
                  <Option value="schools">Schools</Option>
                  <Option value="larger-house">Larger House</Option>
                  <Option value="closer-to-job">Closer to Job</Option>
                </Select>
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

export default BuyingForm;

