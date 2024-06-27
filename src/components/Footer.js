import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#f0f2f5', padding: '40px 20px' }}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Title level={4}>Guides</Title>
          <Link href="#">Guide 1</Link><br />
          <Link href="#">Guide 2</Link><br />
          <Link href="#">Guide 3</Link>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Title level={4}>Company</Title>
          <Link href="#">Meet The Team</Link><br />
          <Link href="#">Our Blog</Link><br />
          <Link href="#">Contact Us</Link>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Title level={4}>Resources</Title>
          <Link href="#">Buy a Home</Link><br />
          <Link href="#">Sell Your Home</Link>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Title level={4}>Social</Title>
          <Link href="#"><FacebookFilled style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
          <Link href="#"><InstagramFilled style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
          <Link href="#"><TwitterSquareFilled style={{ fontSize: '24px' }} /></Link>
        </Col>
        <Col xs={24} sm={12} md={6} lg={8} style={{ textAlign: 'center' }}>
          <Title level={4}>About Us</Title>
          <Text>"a sentence about the company"</Text><br />
          <Text>Phone number: 555-555-5555</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Text>
            This information is believed to be accurate. It has been provided by sources other than the [add info here] and should not be relied upon without independent verification. You should conduct your own investigation and consult with appropriate professionals to determine the accuracy of the information provided and to answer any questions concerning the property and structures located thereon. Featured properties may or may not be listed by the office/agent presenting this brochure. Copyright Realtor Website © 2024
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="center" gutter={[16, 16]}>
        <Col style={{ textAlign: 'center' }}>
          <Link href="#">Terms of Use</Link>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Link href="#">Privacy Policy</Link>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Link href="#">Accessibility</Link>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Link href="#">DMCA</Link>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Link href="#">Listings Sitemap</Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
