// Version: 0
import React from 'react';
import { Modal } from 'antd';
import ContactForm from './ContactForm';

const ContactFormModal = ({ visible, onClose }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    onClose(); // Close the modal on successful submission
  };

  return (
    <Modal
      title="Contact Us"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <ContactForm onFinish={onFinish} />
    </Modal>
  );
};

export default ContactFormModal;

