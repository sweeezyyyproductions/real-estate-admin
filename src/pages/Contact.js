import React from 'react';
import CustomLayout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <CustomLayout>
      <h1>Contact Us</h1>
      <ContactForm onFinish={onFinish} />
    </CustomLayout>
  );
};

export default Contact;
