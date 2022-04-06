import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header(){
    const token = localStorage.getItem('token')

    return (
        <nav className='header-navs'>

            {!token && (
            <Link id='home' to='/'>
                Home
            </Link>
            )}

            {!token && (
            <Link id='signup' to='/signup'>
                Create Account
            </Link>
            )}
            
            {!token && (
            <Link id='login' to='/login'>
                Login
            </Link>
            )}

            {!token && (
            <Link id='about' to='/about'>
                About
            </Link>
            )}

            {token && (
            <Link id='items' to='/items'>
                Products
            </Link>
            )}

            {token && (
            <Link id='profile' to='/profile'>
                Profile
            </Link>
            )}

            {token && (
            <Link id='logout' to='/logout'>
                logout
            </Link>
            )}
        </nav>
    )
}

export default Header