import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const dummyUser = {
  email: 'test@example.com',
  password: 'Tesdsdkfhdfdt@1234',
};


const Login = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email, password } = values;
    if (email === dummyUser.email && password === dummyUser.password) {
      console.log('Login successful');
      navigate('/listings');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
  

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', marginTop: '100px' }}>
      <h1>Login</h1>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          closable
          onClose={() => setError('')}
          style={{ marginBottom: '20px' }}
        />
      )}
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your Password!' },
            {
              pattern: /^(?=.*[A-Z])(?=.*\d{3,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Password must contain at least 8 characters, one uppercase letter, one special character, and at least 3 digits',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="#forgot-password" style={{ float: 'right' }}>
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
