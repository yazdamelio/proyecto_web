import { useContext } from "react";
import {DatosContext} from "../contexts/DatosContext.jsx";

export default function Carrito() {

    const {carrito, setCarrito} = useContext(DatosContext);
    

    //AGREGAR Y RESTAR
    const restar = (item) => {
        const editarCarrito = carrito.find((itemCarrito) => itemCarrito.id === item.id);
    
        editarCarrito.cantidad !== 1 &&
        setCarrito(carrito.map((itemCarrito) => (itemCarrito.id === item.id ? { ...item, cantidad: editarCarrito.cantidad - 1 } : item)));
      };


    const sumar = (item) => {
        const editarCarrito = carrito.find((itemCarrito) => itemCarrito.id === item.id);

        setCarrito(carrito.map((itemCarrito) => (itemCarrito.id === item.id? { ...item, cantidad:
            editarCarrito.cantidad + 1}: itemCarrito)));
    }

    //ELIMINAR
    const eliminar = (item) => {
        const nuevoCarrito = carrito.filter((itemCarrito) => itemCarrito.id !== item.id);
        setCarrito(nuevoCarrito);
    }


    
    
    //MOSTRAMOS LOS PRODUCTOS QUE ESTAN EN CARRITO
    return (
        <>
        <h1>Carrito</h1>
            {carrito.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.nombre}</h3>
                    <p>Precio unitario: ${item.precio}</p>
                    <button  onClick={ ()=> restar(item)}    >-</button>
                    <p>{item.cantidad}</p>
                    <button  onClick={ ()=> sumar(item)}    >+</button>
                    <p>Total: ${item.precio * item.cantidad}</p>
                    <button onClick={ ()=> eliminar(item)}>Eliminar</button>
                </div>
            ))}
        </>
    );



        
    
}