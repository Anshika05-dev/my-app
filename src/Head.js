import './Dashboard.css';
import React, { useState } from 'react';
import {
  MenuOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
function Head() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
  <div>
    <Header
style={{
  padding: 0,
  background: colorBgContainer,
  height:125
}}
>
<div className="header">
<Button
  type="text"
  icon={ <MenuOutlined /> }
  onClick={() => setCollapsed(!collapsed)}
  style={{
    fontSize: '16px',
    marginTop: 35,
    width: 64,
    height: 64,
  }}
/>
<h2>WELCOME BACK, BRIAN!</h2>
<div className="btn">
<Button >MESSAGE</Button>
<Button>SETTING</Button>
</div>
</div>
</Header>
</div>);}
export default Head;