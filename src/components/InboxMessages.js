import React, { useState } from 'react';
import { List, Avatar, Button, Skeleton, Card, Modal, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { TextArea } = Input;

const InboxMessages = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyVisible, setReplyVisible] = useState(false);
  const [reply, setReply] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: 'John Doe',
      description: `This is a message from the ${type} form.`,
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'Hello, I am interested in your services.',
      avatar: 'https://joeschmoe.io/api/v1/random',
    },
    {
      id: 2,
      title: 'Jane Doe',
      description: `This is another message from the ${type} form.`,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      message: 'I would like to know more about your offerings.',
      avatar: 'https://joeschmoe.io/api/v1/random',
    },
    {
      id: 3,
      title: 'Alice Smith',
      description: `Message from Alice Smith.`,
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      message: 'Can you provide more details?',
      avatar: 'https://joeschmoe.io/api/v1/random',
    },
    {
      id: 4,
      title: 'Bob Johnson',
      description: `Message from Bob Johnson.`,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      message: 'I have some questions regarding your service.',
      avatar: 'https://joeschmoe.io/api/v1/random',
    },
    {
      id: 5,
      title: 'Charlie Brown',
      description: `Message from Charlie Brown.`,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      message: 'Could you tell me more about the process?',
      avatar: 'https://joeschmoe.io/api/v1/random',
    },
  ]);

  const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, 3));

  const loadMoreMessages = () => {
    setVisibleMessages(messages);
    setLoading(true);
  };

  const loadMore =
    !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={loadMoreMessages}>Load more</Button>
      </div>
    ) : null;

  const showMessageDetails = (message) => {
    setSelectedMessage(message);
    setReplyVisible(false); // Reset reply visibility when a new message is selected
  };

  const handleModalClose = () => {
    setSelectedMessage(null);
    setReply('');
  };

  const showDeleteConfirm = (message, e) => {
    e.stopPropagation(); // Prevent the click event from triggering the showMessageDetails function
    confirm({
      title: 'Are you sure you want to delete this message?',
      icon: <ExclamationCircleOutlined />,
      content: message.description,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== message.id));
        setVisibleMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== message.id));
        setSelectedMessages((prevSelected) => prevSelected.filter((id) => id !== message.id));
      },
    });
  };

  const handleSelectMessage = (messageId, e) => {
    e.stopPropagation();
    if (selectedMessages.includes(messageId)) {
      setSelectedMessages(selectedMessages.filter((id) => id !== messageId));
    } else {
      setSelectedMessages([...selectedMessages, messageId]);
    }
  };

  const deleteSelectedMessages = () => {
    confirm({
      title: 'Are you sure you want to delete selected messages?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setMessages((prevMessages) => prevMessages.filter((msg) => !selectedMessages.includes(msg.id)));
        setVisibleMessages((prevMessages) => prevMessages.filter((msg) => !selectedMessages.includes(msg.id)));
        setSelectedMessages([]);
      },
    });
  };

  return (
    <div>
      {selectedMessages.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <Button type="text" style={{ color: 'blue' }} onClick={deleteSelectedMessages}>
            Delete Selected
          </Button>
        </div>
      )}
      <List
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={visibleMessages}
        renderItem={item => (
          <List.Item
            actions={[
              <a key="list-loadmore-reply" onClick={(e) => { e.stopPropagation(); showMessageDetails(item); }}>reply</a>,
              <a key="list-loadmore-remove" onClick={(e) => showDeleteConfirm(item, e)}>remove</a>
            ]}
            onClick={(e) => handleSelectMessage(item.id, e)}
            onDoubleClick={() => showMessageDetails(item)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedMessages.includes(item.id) ? '#ffebee' : '',
              transition: 'background-color 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = selectedMessages.includes(item.id) ? '#ffebee' : '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <Modal
        title="Message Details"
        visible={!!selectedMessage}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedMessage && (
          <Card>
            <p><strong>Name:</strong> {selectedMessage.name}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Message:</strong> {selectedMessage.message}</p>
            <div style={{ marginTop: 16, textAlign: 'right' }}>
              {!replyVisible && (
                <Button type="primary" onClick={() => setReplyVisible(true)}>
                  Reply
                </Button>
              )}
              {replyVisible && (
                <div>
                  <TextArea
                    rows={4}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Type your reply here..."
                  />
                  <div style={{ marginTop: 16, textAlign: 'right' }}>
                    <Button type="primary" onClick={() => console.log('Reply:', reply)}>
                      Send Reply
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default InboxMessages;
