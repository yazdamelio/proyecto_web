import { useLogin } from "../contexts/LoginContext"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {login} = useLogin();

    const navigate = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();
        login();
        navigate("/");
    }

    const handlerGoToAdmin = (e) => {
        e.preventDefault();
        navigate("/LoginAdmin");
    }

    return (
    
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" onClick={handlerLogin} className="btn btn-primary">Ingresar</button>
            
            <button type="submit" onClick={handlerGoToAdmin} className="btn btn-link">Ingresar como Administrador</button>
        </form>

    )

}