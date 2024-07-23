// Version: 3
import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import listingsData from '../data/listingsData';
import '../styles/Listings.css';
import ListingCard from '../components/ListingCard';
import AddListingModal from '../components/AddListingModal';

const Listings = () => {
  const [listings, setListings] = useState(listingsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showAddListingModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddListing = (values) => {
    const newListing = {
      key: listings.length + 1,
      ...values,
      slug: `listing-${listings.length + 1}`,
      image: values.image ? URL.createObjectURL(values.image.file.originFileObj) : '/images/default.jpg',
      onSite: 1
    };
    setListings([...listings, newListing]);
    setIsModalVisible(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1>Listings</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showAddListingModal}>
          Add Listing
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        {listings.map((listing) => (
          <ListingCard key={listing.key} listing={listing} />
        ))}
      </Row>
      <AddListingModal visible={isModalVisible} onCancel={handleCancel} onAddListing={handleAddListing} />
    </div>
  );
};

export default Listings;
