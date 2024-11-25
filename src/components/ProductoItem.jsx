import { useContext } from "react";
import {DatosContext} from "../contexts/DatosContext.jsx";

export default function ProductoItem(){ 
    
    const { data, carrito, setCarrito} = useContext(DatosContext);

    //AGREGAR AL CARRITO
    const buyProducts = (item) => {
        const estaAgregado = carrito.find((itemCarrito) => itemCarrito.id === item.id);
        
        if (estaAgregado){
            setCarrito(carrito.map((itemCarrito) => (itemCarrito.id === item.id? { ...item, cantidad:
            estaAgregado.cantidad + 1}: itemCarrito)));
        }else {
            setCarrito([...carrito, { ...item, cantidad: 1 }]);
        }
    }

    //CARD
    return (
        
         <div className="card">
            <div className="card-body" >
                {data.map((item) => (
                    <div key={item.id} className="col-lg-3">
                        <h3>{item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>
                        <button className= "btn btn-primary" onClick={() => buyProducts(item)}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );


}


