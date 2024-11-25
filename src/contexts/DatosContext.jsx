import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DatosContext = createContext();

export function DatosProvider ({ children }) {

    //productos
    const [data , setDatos] = useState([]); 


    //localstorage para carrito
    const carritoGuardado = JSON.parse(localStorage.getItem("Pedido")) || [];
    const [carrito , setCarrito] = useState(carritoGuardado); 
    

    useEffect(() => {
            localStorage.setItem("Pedido", JSON.stringify(carrito));
        }, [carrito]); 



    //localstorage para mostrar productos
    useEffect(() => {
        const datosGuardados = JSON.parse(localStorage.getItem("Productos"));
        if (datosGuardados) {
            setDatos(datosGuardados);
        } else {
            axios("productos.json").then((response) => {
                setDatos(response.data);
                localStorage.setItem("Productos", JSON.stringify(response.data));
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Productos", JSON.stringify(data));
    }, [data]);
    

    //productos
 //   useEffect(() => {
 //       axios("productos.json").then((response)=>setDatos(response.data));
 //   },[])

   
 
    //CRUD 
    const createProducto = (newItem) => {
        const nuevoId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        const nuevoProducto = { id: nuevoId, ...newItem };
        setDatos([...data, nuevoProducto]);
    };


    const updateProducto = (id, updatedData) => {
        setDatos(
            data.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
        ); 
    };

    const deleteProducto = (id) => {
        const confirmDelete = window.confirm('¿Seguro deseas eliminar el producto ID: ${item.id , item.nombre}?');

        if(confirmDelete){
            setDatos(data.filter((item) => item.id !== id)); 
        }
    };

  


   return (
    <DatosContext.Provider value={{data, carrito, setCarrito, createProducto, updateProducto, deleteProducto}}> 
            {children}
        </DatosContext.Provider>
   )
}

