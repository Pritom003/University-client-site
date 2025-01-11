import { Button, Layout, Menu } from "antd";
import {
 
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { useState } from "react";
//   import { Button, Layout, Menu, theme } from 'antd';
  
  const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const items=[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Users',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'Dashboard',
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        },
      ]
    return (
        <div>
             <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
           
          }}
        >
          The Main Content should come here
        </Content>
      </Layout>
    </Layout>
        </div>
    );
};

export default MainLayout;