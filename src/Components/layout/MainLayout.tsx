import { Button, Layout, } from "antd";


// import { adminSidebarItems } from "../../routes/AdminRoutes";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/Auth.slice";
  // import { Button, } from 'antd';
  
  const { Header, Content } = Layout;
const MainLayout = () => {
  const dispatch=useDispatch()
const handlelogout=()=>{
  dispatch(logout())

}
     
    return (
        
             <Layout  style={{ height: '100vh' }}>
    <SideBar></SideBar>
      <Layout>
        <Header >
    <Button type="primary" onClick={handlelogout}>Logout</Button>
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
        
    );
};

export default MainLayout;