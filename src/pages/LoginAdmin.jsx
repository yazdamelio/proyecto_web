import { useAdmin } from "../contexts/AdminContext"
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {

    const {admin} = useAdmin();

    const navigate = useNavigate();

    const handlerLoginAdmin = (e) => {
        e.preventDefault();
        admin();
        navigate("/");
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
            <button type="submit" onClick={handlerLoginAdmin} className="btn btn-primary">Ingresar</button>
        </form>

    )
}