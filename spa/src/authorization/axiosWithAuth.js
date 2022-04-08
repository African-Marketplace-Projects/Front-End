import axios from 'axios';

function axiosWithAuth(){
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:3000/api"
    })
} //this is an axios configurations that attachess an Authorization: <token> header to request
//to  do this we will create a new file whenever the app needs to exchange data with a protected endpoint
// it imports this module istead of axios from axios
//after the user properly authenticates or logs in

export default axiosWithAuth