import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { SmileOutlined, CommentOutlined, CodeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// internal imports
import "./customNavbar.css"

const items = [
  {
    label: <Link to="/about">About</Link>,
    key: 'about',
    icon: <SmileOutlined />
  },
  {
    label: <Link to="/work">Work</Link>,
    key: 'work',
    icon: <CodeOutlined />
  },
  {
    label: <Link  to="/contact">Contact</Link>,
    key: 'contact',
    icon: <CommentOutlined />,
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
  items={items} />
  );
};

export default CustomNavbar;