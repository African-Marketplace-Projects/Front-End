import React, { useState, useEffect  }from 'react';
import axios from 'axios';
import { initialLoginValues } from '../initialValues/initialValues';
import '../styles/login.css'



function Login(){
    const [values, setValues] = useState(initialLoginValues);
    const [error, setError] = useState();
    const setToken = () => localStorage.setItem('token', 'token');

    const login = (credentials) => {
        axios.post('https://african-market-web-api.herokuapp.com/api/auth/login', credentials)
        .then((res) => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            window.location.href = '/items'
        })
        .catch((err) => {
            setError(err.response.data)
        })
    };

    const onChange = (event) => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setToken();
        window.location.href = '/items'
    }

    return(
        <div className='input-container'>
            <div className="login-title">
                <h3>Login Here!</h3>
            </div>
            <div className='login-form'>
                <form onSubmit={onSubmit}>
                    <label>Username
                        <input
                            type='text'
                            name='username'
                            value={values.username}
                            onChange={onChange}
                        />
                    </label>
                    <label>password
                        <input
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={onChange}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;