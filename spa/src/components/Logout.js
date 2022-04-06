import React, { useEffect } from 'react';
import axiosWithAuth from '../authorization/axiosWithAuth'


const Logout= ()=> {
    useEffect(() => {
        localStorage.removeItem("token");
        window.location.href='/'
    },[]);

    useEffect(() => {
        axiosWithAuth().post('')
        .then(() => {
            localStorage.removeItem('token');
            window.location.href='/'
        })
        .catch(err => {
            console.error(err)
        })
    },[]);

    return(
        <div></div>
    );
}

export default Logout;