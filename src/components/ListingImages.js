// Version: 1
import React from 'react';
import { Card, Carousel } from 'antd';

const ListingImages = ({ images, title }) => (
  <Card title={title}>
    <Carousel autoplay>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  </Card>
);

export default ListingImages;
