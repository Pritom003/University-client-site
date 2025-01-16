import { Button, Layout, Menu } from "antd";
import {
 
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    
    
  } from '@ant-design/icons';
import {  useState } from "react";
import { adminSidebarItems } from "../../routes/AdminRoutes";
import { Outlet } from "react-router-dom";
//   import { Button, Layout, Menu, theme } from 'antd';
  
  const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
     
    return (
        <div>
             <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
          style={{
            color: 'white',

            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>My Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={adminSidebarItems}
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
        </div>
    );
};

export default MainLayout;