import { createContext, useContext, useState, useEffect } from "react";

const LoginContext = createContext();

export function LoginProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(() =>{

        const loginStatus = localStorage.getItem("is_logueado");
        return loginStatus === "true";
        });

    const login = () => {
        setIsLogueado(true);
        localStorage.setItem("is_logueado", "true");
    }

    const logout = () => {
        setIsLogueado(false);
        localStorage.removeItem("is_logueado");
    }

    useEffect(() => {
        localStorage.setItem("is_logueado", is_logueado);
    }, [is_logueado]);

    return (
        <LoginContext.Provider value={ {is_logueado, login, logout} }>
            {children}
        </LoginContext.Provider>
    )

}

export function useLogin(){
    return useContext(LoginContext);
}

//--------------------------------------------------------------------

/*

import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        doRefreshToken();
    }, []);

    const doRefreshToken = async() => {

        if(localStorage.getItem("token")){

            try{
                const response = await axios.get("http://localhost:8888/refresh-token", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
    
                if(response.data.success){
                    setIsLogueado(true);
                    setToken(response.data.accessToken);
                }

            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }

        }else{
            setLoading(false);
        }

    }

    const login = ( {accessToken, refreshToken} ) => {
        setIsLogueado(true);
        setToken(accessToken);
        localStorage.setItem("token", refreshToken);
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {
                (loading)
                ?
                    <div> Cargando... </div>
                :
                    children
            }
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}










import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);

    const login = (token) => {
        setIsLogueado(true);
        setToken(token);
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}











import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        doRefreshToken();
    }, []);

    const doRefreshToken = async() => {

        if(localStorage.getItem("token")){

            try{
                const response = await axios.get("http://localhost:8888/refresh-token", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
    
                if(response.data.success){
                    setIsLogueado(true);
                    setToken(response.data.accessToken);
                }

            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }

        }else{
            setLoading(false);
        }

    }

    const login = ( {accessToken, refreshToken} ) => {
        setIsLogueado(true);
        setToken(accessToken);
        localStorage.setItem("token", refreshToken);
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {
                (loading)
                ?
                    <div> Cargando... </div>
                :
                    children
            }
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}
*/