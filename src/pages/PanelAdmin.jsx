import {DatosContext} from "../contexts/DatosContext.jsx";
import { useContext } from "react";

export default function PanelAdmin() {

    const { data, createProducto, readProducto, updateProducto, deleteProducto} = useContext(DatosContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createProducto();
    }
    


    return (
        <div className="container-fluid px-4">

                    <h1 className="mt-4"> Productos </h1>

                    <div className="card mb-4">

                        <div className="card-body">
                            
                            <form className="m-3" onSubmit={handleSubmit}>
                                <input type="text" name="nombre"/>
                                <input type="text" name="descripcion"/>
                                <input type="number" name="precio"/>
                                <input type="number" name="cantidad"/>

                                
                                <input className="btn btn-danger" type="reset" value="cancelar"/>
                                <button type="submit" className="btn btn-primary" >Crear nuevo</button>

                            </form>


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> ID </th>
                                        <th> Nombre </th>
                                        <th> Descripcion </th>
                                        <th> Precio </th>
                                        <th> Cantidad </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.descripcion}</td>
                                                <td>{item.precio}</td>
                                                <td>{item.cantidad}</td>
                                                    
                                                 <td>
                                                     <button type="button" className="btn btn-primary" onClick={() => updateProducto(item.id)}>Editar</button>
                                                 </td>

                                                 <td>
                                                     <button type="button" className="btn btn-primary" onClick={() => deleteProducto(item.id)}>Eliminar</button>
                                                 </td>
                                             </tr>
                                         ))}
                                </tbody>
                            </table>
                            
                           {/*  <button type="button" className="btn btn-primary" onClick={() => resetProductos}>reset</button>*/}
                                                
                        </div>

                    </div>

                </div>
    )
}