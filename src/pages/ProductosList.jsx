import ProductoItem from "../components/ProductoItem.jsx";
import { useContext } from "react";
import {DatosContext} from "../contexts/DatosContext.jsx";

export default function ProductosList() {
    // Traigo los datos
    const { data } = useContext(DatosContext);

    if (!Array.isArray(data) || data.length === 0) {
        return <p>Ha ocurrido un error al cargar los productos</p>;
    }

    //MOSTRAR CARDS PRODUCTOS
     return (
        <ProductoItem />
     )
}
