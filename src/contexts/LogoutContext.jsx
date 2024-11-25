import { useLogin } from "./LoginContext"
import { Navigate } from "react-router-dom";

export default function LogoutContext( {children} ){

    const {is_logueado} = useLogin();

    if( is_logueado ){
        return children
    }else{
        return <Navigate to="/login" />
    }

}