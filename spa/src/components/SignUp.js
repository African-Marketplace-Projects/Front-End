import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/signup.css'
import {
    signUpInitialValues,
    signUpErrors,
} from '../initialValues/initialValues'


function SignUp(){
    const [values, setValues] = useState(signUpInitialValues)
    const [user, setUser] = useState(signUpInitialValues)
    const [errors, setErrors] = useState(signUpErrors)

    const addUser = () => {
        axios.post('', user)
        .then((res) => {
            const user = res.data
            console.log(user);
            setUser(user);
        })
        .catch((err) => {
            setErrors(err.response.data);
        });
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
        setUser(values)
    }

    return(
       <div className='sign-up'>
           <div>
               <h3>Sign Up here!</h3>
           </div>
           <div className='sign-up-form'>
               <form onSubmit={onSubmit}>
                <label>Username:&nbsp;</label>
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                    />
                
                <label>First Name:&nbsp;</label>
                    <input
                        type='text'
                        name='firstName'
                        value={values.firstName}
                        onChange={onChange}
                    />
                
                <label>Last Name:&nbsp;</label>
                    <input
                        type='text'
                        name='lastName'
                        value={values.lastName}
                        onChange={onChange}
                    />
                
                <label>Password:&nbsp;</label>
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                
                <label>Business Name:&nbsp;</label>
                    <input
                        type='text'
                        name='businessName'
                        value={values.businessName}
                        onChange={onChange}
                    />
                <button>Submit</button>
               </form>
           </div>
       </div> 
    )
}

export default SignUp;