import { useAdmin} from "./AdminContext"
import { Navigate } from "react-router-dom";

export default function AdminLogoutContext( {children} ){

    const {is_admin} = useAdmin();

    if( is_admin ){
        return children
    }else{
        return <Navigate to="/login" />
    }

}