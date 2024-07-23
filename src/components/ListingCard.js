// Version: 2
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button, Badge, Avatar } from 'antd';
import { Meta } from 'antd/lib/list/Item';
import { EyeOutlined } from '@ant-design/icons';
import styles from '../styles/listing-banner.module.css'; // Assuming this CSS file contains necessary styles

const ListingCard = ({ listing }) => (
  <Col xs={24} sm={12} md={8} lg={6}>
    <Badge.Ribbon text="Only 1 Day Old!!" color="yellow" className="custom-ribbon">
      <Card hoverable cover={<img alt="example" src={listing.image} />}>
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
        <div className={styles.item} style={{ marginTop: '10px' }}>
          <Avatar icon={<EyeOutlined />} />
          <strong>{listing.views}</strong>
        </div>
      </Card>
    </Badge.Ribbon>
  </Col>
);

export default ListingCard;
