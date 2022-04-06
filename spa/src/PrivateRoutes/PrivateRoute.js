import React from 'react';
import Items from '../components/Items'
import ProfilePage from '../components/ProfilePage'
import { Navigate } from 'react-router-dom';

export const ItemsPrivateRoute = () => {
    const token = localStorage.getItem('token');

    if (token){
        return <Items/>
    } else {
        return <Navigate to='/login'/>
    }
}

export const ProfilePagePrivateRoute = () => {
    const token = localStorage.getItem('token');

    if(token){
        return <ProfilePage/>
    } else {
        return <Navigate to="/login"/>
    }
}

export const LogoutPrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");

    return token ? children  : <Navigate to="/login" />;
}

