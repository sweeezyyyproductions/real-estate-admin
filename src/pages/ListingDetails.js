// Version: 3
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Table, Button, Carousel, Row, Col, Form, Input, Modal } from 'antd';
import { EditOutlined, SaveOutlined, UndoOutlined, PlusOutlined } from '@ant-design/icons';
import listingsData from '../data/listingsData';

const DetailedListing = () => {
  const { slug } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingFeatures, setIsEditingFeatures] = useState(false);
  const [listing, setListing] = useState(() => listingsData.find(l => l.slug === slug));
  const [form] = Form.useForm();
  const [featuresForm] = Form.useForm();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    form.validateFields()
      .then(values => {
        setListing({ ...listing, ...values });
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

  const handleEditFeaturesClick = () => {
    setIsEditingFeatures(true);
  };

  const handleSaveFeaturesClick = () => {
    featuresForm.validateFields()
      .then(values => {
        setListing({
          ...listing,
          exteriorFeatures: values.exteriorFeatures || [],
          interiorFeatures: values.interiorFeatures || [],
          propertyFeatures: values.propertyFeatures || [],
        });
        setIsEditingFeatures(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancelFeaturesClick = () => {
    featuresForm.resetFields();
    setIsEditingFeatures(false);
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
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Card title={listing.title}>
            <Carousel autoplay>
              {listing.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                </div>
              ))}
            </Carousel>
            <Card style={{ marginTop: '16px' }}>
              <Row gutter={16}>
                <Col span={12}>
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
                <Col span={12}>
                  <Card title="Agent Info">
                    {!isEditing ? (
                      <>
                        <p>{listing.agent.name}</p>
                        <p>{listing.agent.number}</p>
                      </>
                    ) : (
                      <Form form={form} initialValues={listing} layout="vertical">
                        <Form.Item name="agentName" label="Agent Name" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item name="agentNumber" label="Agent Number" rules={[{ required: true }]}>
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
        <Col span={24}>
          <Card title="Features">
            {!isEditingFeatures ? (
              <>
                <h3>Exterior Features</h3>
                <Table columns={columns} dataSource={listing.exteriorFeatures} pagination={false} />
                <h3>Interior Features</h3>
                <Table columns={columns} dataSource={listing.interiorFeatures} pagination={false} />
                <h3>Property Features</h3>
                <Table columns={columns} dataSource={listing.propertyFeatures} pagination={false} />
                <Button type="primary" icon={<EditOutlined />} onClick={handleEditFeaturesClick}>
                  Edit Features
                </Button>
              </>
            ) : (
              <Form form={featuresForm} initialValues={listing} layout="vertical">
                <h3>Exterior Features</h3>
                <Form.List name="exteriorFeatures">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Row key={key} gutter={16}>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'feature']}
                              fieldKey={[fieldKey, 'feature']}
                              rules={[{ required: true, message: 'Missing feature' }]}
                            >
                              <Input placeholder="Feature" />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              fieldKey={[fieldKey, 'description']}
                              rules={[{ required: true, message: 'Missing description' }]}
                            >
                              <Input placeholder="Description" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Button type="danger" onClick={() => remove(name)}>
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Exterior Feature
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <h3>Interior Features</h3>
                <Form.List name="interiorFeatures">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Row key={key} gutter={16}>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'feature']}
                              fieldKey={[fieldKey, 'feature']}
                              rules={[{ required: true, message: 'Missing feature' }]}
                            >
                              <Input placeholder="Feature" />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              fieldKey={[fieldKey, 'description']}
                              rules={[{ required: true, message: 'Missing description' }]}
                            >
                              <Input placeholder="Description" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Button type="danger" onClick={() => remove(name)}>
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Interior Feature
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <h3>Property Features</h3>
                <Form.List name="propertyFeatures">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Row key={key} gutter={16}>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'feature']}
                              fieldKey={[fieldKey, 'feature']}
                              rules={[{ required: true, message: 'Missing feature' }]}
                            >
                              <Input placeholder="Feature" />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              fieldKey={[fieldKey, 'description']}
                              rules={[{ required: true, message: 'Missing description' }]}
                            >
                              <Input placeholder="Description" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Button type="danger" onClick={() => remove(name)}>
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Property Feature
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                  <Button type="primary" icon={<SaveOutlined />} onClick={handleSaveFeaturesClick}>
                    Save Features
                  </Button>
                  <Button icon={<UndoOutlined />} onClick={handleCancelFeaturesClick}>
                    Undo
                  </Button>
                </div>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailedListing;
 