// Version: 3
import React from 'react';
import { Card, Badge, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import styles from '../styles/listing-banner.module.css';

const ListingBanner = () => {
  return (
    <Card className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.item}>
          <span>Status: </span>
          <Badge status="processing" text="Active" />
        </div>
        <div className={styles.item}>
          <span>On Site: </span>
          <strong>1 day</strong>
        </div>
        <div className={styles.item}>
          <span>MLS #: </span>
          <strong>123456</strong>
        </div>
        <div className={styles.item}>
          <span>Updated: </span>
          <strong>5 minutes ago</strong>
        </div>
        <div className={styles.item}>
          <span>Views: </span>
          <Avatar icon={<EyeOutlined />} />
          <strong>150</strong>
        </div>
      </div>
    </Card>
  );
};

export default ListingBanner;
