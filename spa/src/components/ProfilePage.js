import React, {useState} from 'react';
import axiosWithAuth from "../authorization/axiosWithAuth";
import {newUser} from '../initialValues/initialValues'

function ProfilePage(){
    const [user, setUser] = useState(newUser)

    return(
        <div className='user-info'>
            <h1 className='user-img'>{user.firstName} {user.lastName}</h1>
            <p>{user.userName}</p>
            <p>{user.businessName}</p>
        </div>
    )
}

export default ProfilePage;