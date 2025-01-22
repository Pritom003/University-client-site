
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateAdmin from '../Pages/Admin/CreateAdmin';
// import CreateFaculty from '../Pages/Admin/createFaculty';
import CreateStudents from '../Pages/Admin/C\'reateStudents';
import CreateFaculty from '../Pages/Admin/CreateFaculty';
import AcademicSemister from '../Pages/Admin/academicmanagement/AcademicSemister';





export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Axademic Semister',
        path: 'academic-semister',
        element: <AcademicSemister/>,
      },
   
      
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin/>,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty/>,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudents/>,
      },
      
    ],
  },
];



//* Programatical way



//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
///   },
// ];/     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
