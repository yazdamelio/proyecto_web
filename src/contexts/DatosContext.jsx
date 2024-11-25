import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DatosContext = createContext();

export function DatosProvider ({ children }) {

    //productos
    const [data , setDatos] = useState([]); 
    //carrito
    const carritoGuardado = JSON.parse(localStorage.getItem("Pedido")) || [];
    const [carrito , setCarrito] = useState(carritoGuardado); 
    

    //productos
    useEffect(() => {
        axios("productos.json").then((response)=>setDatos(response.data));
    },[])

    //carrito
    //localStorage
    useEffect(() => {
        localStorage.setItem("Pedido", JSON.stringify(carrito));
      }, [carrito]); 



    //CRUD 
    const createProducto = (newItem) => {
        const nuevoId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        setDatos([...data, newItem]); // Agrega el nuevo producto a la lista
    };

    const readProducto = (id) => {
        return data.find((item) => item.id === id); // Encuentra el producto por su ID
    };

    const updateProducto = (id, updatedData) => {
        setDatos(
            data.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
        ); // Actualiza el producto
    };

    const deleteProducto = (id) => {
        const confirmDelete = window.confirm('¿Seguro deseas eliminar el producto ID: ${item.id , item.nombre}?');

        if(confirmDelete){
            setDatos(data.filter((item) => item.id !== id)); // Elimina el producto por ID
        }

        
    };

   // const resetProductos = () => {
   //     axios("productos.json").then((response) => setDatos(response.data));
   // };



   return (
    <DatosContext.Provider value={{data, carrito, setCarrito, createProducto, readProducto, updateProducto, deleteProducto}}> 
            {children}
        </DatosContext.Provider>
   )
}

