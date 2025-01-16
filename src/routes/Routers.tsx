import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { adminRoutes } from './AdminRoutes';
import Login from '../Pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: adminRoutes,
  },
  {
    path: '/faculty',
    element: <App />,
    children: adminRoutes,
  },
  {
    path: '/student',
    element: <App />,
    children: adminRoutes,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  
]);

export default router;