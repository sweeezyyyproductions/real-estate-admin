// Version: 1
import React, { useState } from 'react';
import { Form, Input, Slider, Modal, Space, Button, notification, Upload, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const AddListingModal = ({ visible, onCancel, onAddListing }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [form] = Form.useForm();

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleFinish = (values) => {
    if (Object.values(values).some(value => !value)) {
      notification.warn({
        message: 'Empty Fields',
        description: 'Are you sure you want to create a listing with empty fields? This will make the listing harder to search.',
      });
    }
    onAddListing(values);
    form.resetFields();
    setCurrentSection(0);
  };

  return (
    <Modal title="Add New Listing" visible={visible} onCancel={onCancel} footer={null}>
      <Form form={form} onFinish={handleFinish} layout="vertical">
        {currentSection === 0 && (
          <div>
            <h2>Property Details</h2>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Slider min={0} max={1000000} step={1000} />
            </Form.Item>
            <Form.Item name="beds" label="Beds" rules={[{ required: true }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="baths" label="Baths" rules={[{ required: true }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="sqft" label="Sq Ft" rules={[{ required: true }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="neighborhood" label="Neighborhood" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="yearBuilt" label="Year Built" rules={[{ required: true }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="area" label="Area" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="image" label="Upload Image" rules={[{ required: true }]}>
              <Upload listType="picture-card" beforeUpload={() => false}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled>Previous</Button>
              <Button type="primary" onClick={handleNext}>
                Next
              </Button>
            </Space>
          </div>
        )}
        {currentSection === 1 && (
          <div>
            <h2>Features</h2>
            <Form.List name="features">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Row key={key} gutter={[16, 16]}>
                      <Col span={12}>
                        <Form.Item
                          {...restField}
                          name={[name, 'feature']}
                          fieldKey={[fieldKey, 'feature']}
                          rules={[{ required: true, message: 'Missing feature' }]}
                        >
                          <Input placeholder="Feature" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          {...restField}
                          name={[name, 'description']}
                          fieldKey={[fieldKey, 'description']}
                          rules={[{ required: true, message: 'Missing description' }]}
                        >
                          <Input placeholder="Description" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Button type="dashed" onClick={() => remove(name)} block icon={<MinusOutlined />}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Feature
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handlePrevious}>Previous</Button>
              <Button type="primary" htmlType="submit">
                Add Listing
              </Button>
            </Space>
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default AddListingModal;
