import {DatosContext} from "../contexts/DatosContext.jsx";
import { useContext, useState  } from "react";

export default function PanelAdmin() {

    const { data, createProducto, updateProducto, deleteProducto} = useContext(DatosContext);

    const [editItem, setEditItem] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newItem = {
            nombre: form.nombre.value,
            descripcion: form.descripcion.value,
            precio: parseFloat(form.precio.value),
            cantidad: parseInt(form.cantidad.value, 10),
        };
        createProducto(newItem);
        form.reset();
    };

   


    return (
        <div className="container-fluid px-4">

                    <h1 className="mt-4"> Productos </h1>

                    <div className="card mb-4">

                        <div className="card-body">

                            {/*crear nuevo producto */}
                            
                            <form className="m-3" onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <input type="text" className="form-control"  placeholder="nombre" id="nombre"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control"  placeholder="descripcion" id="descripcion"/>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control"  placeholder="precio" id="precio"/>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control"  placeholder="cantidad" id="cantidad"/>
                            </div>


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
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    onClick={() => setEditItem(item)} 
                                                >
                                                    Editar
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => deleteProducto(item.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                             
                                                <div className="modal" tabIndex="-1" id="exampleModal">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Editar producto</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>

                                                        <div className="modal-body">
                                                            
                                                            <div className="mb-3">
                                                                <input type="text" className="form-control"  id="nombre" value={editItem ? editItem.nombre : ""}
                                                                onChange={(e) =>
                                                                    setEditItem({ ...editItem, nombre: e.target.value })
                                                                }/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <input type="text" className="form-control"  id="descripcion" value={editItem ? editItem.descripcion : ""}
                                                                onChange={(e) =>
                                                                    setEditItem({ ...editItem, descripcion: e.target.value })
                                                                }/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <input type="number" className="form-control"  id="precio" value={editItem ? editItem.precio : ""}
                                                                onChange={(e) =>
                                                                    setEditItem({ ...editItem, precio: e.target.value })
                                                                }/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <input type="number" className="form-control"  id="cantidad" value={editItem ? editItem.cantidad : ""}
                                                                onChange={(e) =>
                                                                    setEditItem({ ...editItem, cantidad: e.target.value })
                                                                }/>
                                                            </div>
                                                        </div>
                                                        

                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                            <button type="button" className="btn btn-primary" onClick={() => {updateProducto(editItem.id, editItem); setEditItem(null)}}>Guardar</button>
                                                        </div>
                                                    </div>
                                                </div>                 
                                              </div>  
                        </div>

                    </div>

                </div>
    )
}