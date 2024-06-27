import React from 'react';
import CustomLayout from '../components/Layout';
import { Row, Col, Card, Carousel, Statistic, Progress, List, Form, Input, Button, Avatar, Collapse, Tabs } from 'antd';
import { ArrowUpOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import listings from '../data/listingsData';

const { Meta } = Card;

const testimonials = [
  { name: 'John Doe', message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."' },
  { name: 'Jane Smith', message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."' },
  { name: 'Alice Johnson', message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."' },
  { name: 'Michael Brown', message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."' },
];

const blogPosts = [
  { title: 'Blog Post 1', description: 'This is a description of blog post 1.' },
  { title: 'Blog Post 2', description: 'This is a description of blog post 2.' },
  { title: 'Blog Post 3', description: 'This is a description of blog post 3.' },
  { title: 'Blog Post 4', description: 'This is a description of blog post 4.' },
  { title: 'Blog Post 5', description: 'This is a description of blog post 5.' },
];

const Home = () => {
  const featuredListings = listings.slice(0, 3); // Get first three listings

  return (
    <CustomLayout>
      {/* Hero Section */}
      <div style={{ background: 'url(/images/houses2.webp) center/cover', padding: '100px 0', textAlign: 'center', color: 'white' }}>
        <h1>Welcome to Our Real Estate Website</h1>
        <p>Find your dream home with us</p>
      </div>

      {/* Featured Listings */}
      <section style={{ padding: '50px 0' }}>
        <Card title="Featured Listings">
          <Row gutter={[16, 16]}>
            {featuredListings.map((listing) => (
              <Col key={listing.key} xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={
                    <div className="listing-image-wrapper">
                      <img src={listing.image} alt={listing.title} className="listing-image" />
                      <Link to={`/listings/${listing.slug}`}>
                        <button className="view-details-button">View Details</button>
                      </Link>
                    </div>
                  }
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
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button type="primary"><Link to="/listings">View More Listings</Link></Button>
          </div>
        </Card>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '50px 0' }}>
        <h2>What Our Clients Say</h2>
        <Carousel autoplay>
          {testimonials.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((testimonialPair, index) => (
            <div key={index}>
              <Row gutter={[16, 16]} justify="center">
                {testimonialPair.map((testimonial, subIndex) => (
                  <Col key={subIndex} xs={24} sm={12}>
                    <Card>
                      <Avatar icon={<UserOutlined />} size={64} />
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.message}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Statistics */}
      <section style={{ padding: '50px 0' }}>
        <h2>Our Achievements</h2>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Statistic title="Homes Sold" value={1128} prefix={<ArrowUpOutlined />} />
          </Col>
          <Col span={6}>
            <Statistic title="Average Price" value={350000} prefix="$" />
          </Col>
          <Col span={6}>
            <Statistic title="Happy Clients" value={950} />
          </Col>
          <Col span={6}>
            <Statistic title="Years in Business" value={10} />
          </Col>
        </Row>
        <Progress percent={75} style={{ marginTop: '20px' }} />
      </section>

      {/* Blog Posts */}
      <section style={{ padding: '50px 0' }}>
        <h2>Recent Blog Posts</h2>
        <Carousel autoplay>
          {blogPosts.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((blogPostTriple, index) => (
            <div key={index}>
              <Row gutter={[16, 16]} justify="center">
                {blogPostTriple.map((blogPost, subIndex) => (
                  <Col key={subIndex} xs={24} sm={12} md={8}>
                    <Card title={blogPost.title}>
                      <p>{blogPost.description}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Newsletter Signup */}
      <section style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Subscribe to Our Newsletter</h2>
        <Form layout="inline" style={{ justifyContent: 'center' }}>
          <Form.Item>
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Subscribe</Button>
          </Form.Item>
        </Form>
      </section>

      {/* Video Section */}
      <section style={{ padding: '50px 0' }}>
        <h2>Watch Our Video</h2>
        <Card>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>
      </section>

      {/* Team Introduction */}
      <section style={{ padding: '50px 0' }}>
        <h2>Meet Our Team</h2>
        <Row gutter={[16, 16]}>
          {['John Doe', 'Jane Smith', 'Alice Johnson'].map((name, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card>
                <Card.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={name}
                  description="Real Estate Agent"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Ready to Find Your Dream Home?</h2>
        <Button type="primary" size="large" onClick={() => window.open('/contact', '_blank')}>Contact Us</Button>
      </section>

      {/* Accordion/Collapse */}
      <section style={{ padding: '50px 0' }}>
        <h2>Frequently Asked Questions</h2>
        <Collapse accordion items={[
          {
            key: '1',
            header: 'Question 1',
            children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          },
          {
            key: '2',
            header: 'Question 2',
            children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          },
          {
            key: '3',
            header: 'Question 3',
            children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          },
        ]} />
      </section>

      {/* Tabs */}
      <section style={{ padding: '50px 0' }}>
        <h2>More Information</h2>
        <Tabs defaultActiveKey="1" items={[
          {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab 1',
          },
          {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab 2',
          },
          {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab 3',
          },
        ]} />
      </section>

      {/* Static Map Image */}
      <section style={{ padding: '50px 0' }}>
        <h2>Our Service Areas</h2>
        <Card cover={<img alt="map" src="/images/map.jpg" />} />
      </section>
    </CustomLayout>
  );
};

export default Home;
