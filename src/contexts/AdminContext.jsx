import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export function AdminProvider( {children} ){

    const [is_admin, setIsAdmin] = useState(() =>{

    const adminStatus = localStorage.getItem("is_admin");
    return adminStatus === "true";
    });

    const admin = () => {
        setIsAdmin(true);
        localStorage.setItem("is_admin", "true");
    }

    const logoutAdmin = () => {
        setIsAdmin(false);
        localStorage.removeItem("is_admin");
    }

    useEffect(() => {
        localStorage.setItem("is_admin", is_admin);
    }, [is_admin]);

    return (
        <AdminContext.Provider value={ {is_admin, admin, logoutAdmin} }>
            {children}
        </AdminContext.Provider>
    )

}

export function useAdmin(){
    return useContext(AdminContext);
}
