// Version: 2
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Table, Button, Carousel, Row, Col, Form, Input, Modal } from 'antd';
import { EditOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import listingsData from '../data/listingsData';
import ListingBanner from '../components/listing-banner';

const DetailedListing = () => {
  const { slug } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listing, setListing] = useState(() => listingsData.find(l => l.slug === slug));
  const [form] = Form.useForm();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    form.validateFields()
      .then(values => {
        const updatedListing = {
          ...listing,
          ...values,
          agent: {
            ...listing.agent,
            number: values.agentNumber,
          },
        };
        setListing(updatedListing);
        setIsEditing(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancelClick = () => {
    form.resetFields();
    setIsEditing(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddListing = (values) => {
    const newListing = {
      key: listingsData.length + 1,
      ...values,
      image: URL.createObjectURL(values.image.file.originFileObj),
    };
    listingsData.push(newListing);
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <ListingBanner />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title={listing.title}>
            <Carousel autoplay>
              {listing.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                </div>
              ))}
            </Carousel>
            <Card style={{ marginTop: '16px' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card title="Property Details">
                    {!isEditing ? (
                      <>
                        <p>{listing.address}</p>
                        <p>{listing.price}</p>
                        <p>{`${listing.beds} beds, ${listing.baths} baths, ${listing.sqft} sq ft`}</p>
                        <p>{`Neighborhood: ${listing.neighborhood}`}</p>
                        <p>{`Year Built: ${listing.yearBuilt}`}</p>
                        <p>{`Area: ${listing.area}`}</p>
                      </>
                    ) : (
                      <Form form={form} initialValues={listing} layout="vertical">
                        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                          <Input />
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
                      </Form>
                    )}
                  </Card>
                </Col>
                <Col xs={24} md={12}>
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
                </Col>
              </Row>
            </Card>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
              {!isEditing ? (
                <Button type="primary" icon={<EditOutlined />} onClick={handleEditClick}>
                  Edit
                </Button>
              ) : (
                <>
                  <Button type="primary" icon={<SaveOutlined />} onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button icon={<UndoOutlined />} onClick={handleCancelClick}>
                    Undo
                  </Button>
                </>
              )}
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Features">
            <h3>Exterior Features</h3>
            <Table columns={columns} dataSource={listing.exteriorFeatures} pagination={false} />
            <h3>Interior Features</h3>
            <Table columns={columns} dataSource={listing.interiorFeatures} pagination={false} />
            <h3>Property Features</h3>
            <Table columns={columns} dataSource={listing.propertyFeatures} pagination={false} />
          </Card>
        </Col>
      </Row>
      <Modal
        title="Contact Agent"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddListing} layout="vertical">
          <Form.Item name="message" label="Message" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailedListing;
