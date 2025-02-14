
import AdminDashboard from '../Pages/Admin/AdminDashboard';


import AcademicSemister from '../Pages/Admin/academicmanagement/AcademicSemister';
import CreateAcademicSem from '../Pages/Admin/academicmanagement/CreateAcademicSem';
import AcademicFaculty from '../Pages/Admin/academicmanagement/AcademicFaculty';
import CreateAcademicFaculty from '../Pages/Admin/academicmanagement/CreateAcademicFaculty';
import CreateAcaDept from '../Pages/Admin/academicmanagement/CreateAcademicDept';
import AcademicDept from '../Pages/Admin/academicmanagement/AcademicDept';
import CreateAdmin from '../Pages/Admin/UserManagement/CreateAdmin';
import CreateFaculty from '../Pages/Admin/UserManagement/CreateFaculty';
import CreateStudents from '../Pages/Admin/UserManagement/CreateStudents';
import StudentData from '../Pages/Admin/UserManagement/StudentsData';
import StudentDetails from '../Pages/Admin/UserManagement/StudentDetails';







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
        name: 'Create A. Semister',
        path: 'create-semister',
        element: <CreateAcademicSem/>,
      },
      {
        name: 'Academic Semister',
        path: 'academic-semister',
        element: <AcademicSemister/>,
      },
      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-department',
        element: <CreateAcaDept />,
      },
      {
        name: 'Academic Department',
        path: 'academic-department',
        element: <AcademicDept/>,
      },
      
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudents/>,
      },
      {
        name: 'Students',
        path: 'students-data',
        element: <StudentData />,
      },
      { name: 'Student Details',
        path: 'student-data/:studentId',
        element: <StudentDetails/>,
      },
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
