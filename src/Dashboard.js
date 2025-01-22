
import './Dashboard.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import React, { useState } from 'react';
import {
  MenuOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook to get navigate function
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="dashboard">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="side">
            <h1> Brian Hughes</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Home',
                onClick: () => navigate('/home'), // Use navigate here
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Data',
                onClick: () => navigate('/data'), // Use navigate here
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              height: 125,
            }}
          >
            <div className="header">
              <Button
                type="text"
                icon={<MenuOutlined />}
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
                <Button>MESSAGE</Button>
                <Button>SETTING</Button>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              minHeight: 860,
              minWidth: 900,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
