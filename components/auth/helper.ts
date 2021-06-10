import axios from 'axios'

export const url = process.env.APP_IP;




export const setAuthToken = (token: string) => {
    if(token){
        innerBackend.defaults.headers.common['auth-token'] = token;
    } 
}


export const innerBackend = axios.create ({
        baseURL: url,
        headers: {
            accept: 'application/json',        
        }       
    })


//localStorage.setItem('token', payload.token);



