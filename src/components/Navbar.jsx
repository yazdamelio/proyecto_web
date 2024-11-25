import { Link } from "react-router-dom"
import { useLogin } from "../contexts/LoginContext"
import { useAdmin } from "../contexts/AdminContext"
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const {is_logueado, logout} = useLogin();
    const {is_admin, logoutAdmin} = useAdmin();

    const navigate = useNavigate();

    const handlerLogout = (e) => { 
        e.preventDefault();
        logout();
        navigate("/login");
    }

    const handlerAdminLogout = (e) => {
        e.preventDefault();
        logoutAdmin();
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Inicio </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos"> Productos </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto"> Contacto </Link>
                        </li>
                       {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Personas random
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/personas"> Toda/os </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/personas/female"> Chicas </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/personas/male"> Chicos </Link>
                                 </li> 
                            </ul>
                        </li>*/}
                        
                       {/*  {
                            (is_logueado) 
                            ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/privado"> Privado </Link>
                                    </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="" onClick={handlerLogout}> Cerrar sesión </a>
                                    </li>
                                </>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> Login </Link>
                            </li>
                        }
                        {
                            (is_admin) 
                            ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/panelAdmin"> Privado </Link>
                                    </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="" onClick={handlerAdminLogout}> Cerrar sesión </a>
                                    </li>
                                </>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> Login </Link>
                            </li>
                        }   */}             

                        {/* Renderizado según el estado del usuario */}
                        {is_admin ? (
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/panelAdmin">Panel Admin</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handlerAdminLogout}>Cerrar sesión</a>
                            </li>
                        </>
                        ) : is_logueado ? (
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/privado">Privado</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handlerLogout}>Cerrar sesión</a>
                            </li>
                        </>
                        ) : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        )}                                     
                        
                    </ul>
                </div>
            </div>
        </nav>
    )

}