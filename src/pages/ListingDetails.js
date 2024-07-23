// Version: 4
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Table, Button, Carousel, Row, Col, Form, Input, Modal } from 'antd';
import { EditOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import listingsData from '../data/listingsData';
import ListingBanner from '../components/listing-banner';
import PropertyDetails from '../components/PropertyDetails';
import AgentInfo from '../components/AgentInfo';
import Features from '../components/Features';
import ListingImages from '../components/ListingImages';

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
          <ListingImages images={listing.images} title={listing.title} />
          <PropertyDetails isEditing={isEditing} form={form} listing={listing} />
          <AgentInfo isEditing={isEditing} form={form} listing={listing} showModal={showModal} />
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
        </Col>
        <Col xs={24} md={12}>
          <Features columns={columns} listing={listing} />
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
