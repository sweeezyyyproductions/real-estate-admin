// Version: 1
import React from 'react';
import { Card, Table } from 'antd';

const Features = ({ columns, listing }) => (
  <Card title="Features">
    <h3>Exterior Features</h3>
    <Table columns={columns} dataSource={listing.exteriorFeatures} pagination={false} />
    <h3>Interior Features</h3>
    <Table columns={columns} dataSource={listing.interiorFeatures} pagination={false} />
    <h3>Property Features</h3>
    <Table columns={columns} dataSource={listing.propertyFeatures} pagination={false} />
  </Card>
);

export default Features;
