import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form, Input, Slider, Modal, Space, notification, Upload, Pagination } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import listingsData from '../data/listingsData';

const { Meta } = Card;

const Listings = () => {
  const [listings, setListings] = useState(listingsData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const showAddListingModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setCurrentSection(0);
  };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleAddListing = (values) => {
    if (Object.values(values).some(value => !value)) {
      notification.warn({
        message: 'Empty Fields',
        description: 'Are you sure you want to create a listing with empty fields? This will make the listing harder to search.',
      });
    }

    const newListing = {
      key: listings.length + 1,
      ...values,
      slug: `listing-${listings.length + 1}`,
      image: values.image ? URL.createObjectURL(values.image.file.originFileObj) : '/images/default.jpg', // Placeholder image
    };
    setListings([...listings, newListing]);
    setIsModalVisible(false);
    form.resetFields();
    setCurrentSection(0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedListings = listings.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1>Listings</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showAddListingModal}>
          Add Listing
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        {paginatedListings.map((listing) => (
          <Col key={listing.key} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt="example" src={listing.image} />}
            >
              <Meta title={listing.title} description={listing.address} />
              <p>{listing.price}</p>
              <Row>
                <Col span={12}>
                  <p>Beds: {listing.beds}</p>
                </Col>
                <Col span={12}>
                  <p>Baths: {listing.baths}</p>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <p>Sq Ft: {listing.sqft}</p>
                </Col>
                <Col span={12}>
                  <Link to={`/listings/${listing.slug}`}>
                    <Button type="link">View Details</Button>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={listings.length}
        onChange={handlePageChange}
        style={{ marginTop: 20, textAlign: 'center' }}
      />

      <Modal
        title="Add New Listing"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddListing} layout="vertical">
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
    </div>
  );
};

export default Listings;

