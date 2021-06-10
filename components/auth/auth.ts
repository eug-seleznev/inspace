import { useEffect } from "react";
import { useUserStore } from "../../stores/user/hook"
import { setAuthToken } from "./helper";








//todo redirect to auth if !token
const Auth = ({children}: any) => {

      

        if (typeof window !== 'undefined') {
        //we are running on the client
        const token = localStorage.getItem('token');
        
        if(token) setAuthToken(token);
        
        return children
    } else {
        //we are running on the server
        return children
    }


          

}


export default Auth