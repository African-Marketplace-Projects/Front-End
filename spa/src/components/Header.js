import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header(){
    const token = localStorage.getItem('token')

    return (
        <div className='container'>
            <div className='navbar'>
                <img src="https://cdn-icons.flaticon.com/png/128/3815/premium/3815009.png?token=exp=1649262643~hmac=0388545f370e89f5961e72df29356522" 
                className='logo' alt='mountains and sun'/>
                    <nav>
                        <ul>
                            <li>
                            {!token && (
                            <Link id='home' to='/'>
                                Home
                            </Link>
                            )}
                            </li>

                            <li>
                            {!token && (
                            <Link id='signup' to='/signup'>
                                Create Account
                            </Link>
                            )}
                            </li>

                            <li>
                            {!token && (
                            <Link id='login' to='/login'>
                                Login
                            </Link>
                            )}
                            </li>

                            <li>
                            {!token && (
                            <Link id='about' to='/about'>
                                About
                            </Link>
                            )}
                            </li>

                            <li>
                            {token && (
                            <Link id='items' to='/items'>
                                Products
                            </Link>
                            )}
                            </li>

                            <li>
                            {token && (
                            <Link id='profile' to='/profile'>
                                Profile
                            </Link>
                            )}
                            </li>

                            <li>
                            {token && (
                            <Link id='logout' to='/logout'>
                                logout
                            </Link>
                            )}
                            </li>
                        </ul>
                    </nav>
                <img src="https://cdn-icons.flaticon.com/png/128/2976/premium/2976215.png?token=exp=1649262852~hmac=df3c7ce26d806e188e85152a06d0f6d0" 
                className='menu-icon' alt='menu icon'/>
            </div>
        </div>
    )
}

export default Header