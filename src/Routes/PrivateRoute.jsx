import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {userInfo,loading} = useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <p>Loading...</p>
    }
    if(userInfo){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;