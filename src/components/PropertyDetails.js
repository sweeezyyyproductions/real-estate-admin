// Version: 1
import React from 'react';
import { Card, Form, Input } from 'antd';

const PropertyDetails = ({ isEditing, form, listing }) => (
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
);

export default PropertyDetails;
