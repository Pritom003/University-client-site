import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SidebarItemsGenerator } from "../../Utils/SideBarItemsGenerator";
import { adminPaths } from "../../routes/AdminRoutes";
import { FacultyPaths } from "../../routes/facultyRoutes";
import { useAppSelector } from "../../redux/hooks";
import {  useCurrentUser } from "../../redux/features/auth/Auth.slice";

const Userrole={
  Admin:'Admin',
  Faculty:'Faculty',
  Student:'Student'}
const SideBar = () => {


        const user=useAppSelector(useCurrentUser)
        if (!user) {
          return null; // or a fallback UI
      }
  
    let sidebarItems
    switch (user!.role) {
        case Userrole.Admin:
            sidebarItems=SidebarItemsGenerator(adminPaths, Userrole.Admin);
            
        break;
        case Userrole.Faculty:
            sidebarItems=SidebarItemsGenerator(FacultyPaths, Userrole.Faculty);
            
        break;
        default:
    }
    return (
    
              <Sider trigger={null} collapsible >
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
          items={sidebarItems}
        />
      </Sider>
    
    );
};

export default SideBar;