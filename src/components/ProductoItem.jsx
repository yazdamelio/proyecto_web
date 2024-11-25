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
            setCarrito([...carrito, item]);
        }
    }

    //CARD
    return (
        <>
            {data.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <button onClick={() => buyProducts(item)}>Comprar</button>
                </div>
            ))}
        </>
    );


}


