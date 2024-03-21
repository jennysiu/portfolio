import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { SmileOutlined, CommentOutlined, CodeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// internal imports
import "./customNavbar.css"

const items = [
  {
    label: 'About',
    key: 'about',
    icon: <SmileOutlined />,
    onClick: () => navigate('/about'),
  },
  {
    label: 'Work',
    key: 'work',
    icon: <CodeOutlined />,
    onClick: () => navigate('/work'),
  },
  {
    label: 'Contacts',
    key: 'contacts',
    icon: <CommentOutlined />,
    onClick: () => navigate('/contacts'),
  }
];

const CustomNavbar = () => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
  <Menu 
  onClick={onClick} 
  selectedKeys={[current]} 
  mode="horizontal" 
  items={items}/>
  );
};

export default CustomNavbar;