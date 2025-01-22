import React, { ReactNode } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentToken } from '../../redux/features/auth/Auth.slice';
import { Navigate } from 'react-router-dom';

const   ProtectedRoute = ({children}:{children:ReactNode}) => {
    const token=useAppSelector(useCurrentToken)

   
            if(token){
return children
            }
            else{
                return <Navigate to='/login' replace={true}/>;
            }
        
     
   
};

export default ProtectedRoute;