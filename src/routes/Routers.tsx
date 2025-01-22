import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { adminPaths} from './AdminRoutes';
import Login from '../Pages/Login';
import { routeGenerator } from '../Utils/routesGenerators';
import { FacultyPaths } from './facultyRoutes';
import { StudentPaths } from './StudentRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children:  routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children:  routeGenerator(FacultyPaths)
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(StudentPaths),
  },
  {
    path: '/login',
    element: <Login/>,
  },
  
]);

export default router;