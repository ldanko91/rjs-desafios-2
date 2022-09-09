import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
    const [cuenta , setCuenta] = useState (0)
    const onAdd = (contador) => {
        setCuenta(contador)
        console.log(contador)
        console.log(`Has añadido ${cuenta} unidades al carrito`)
        // setTimeout(() => {
        //     const navigate = useNavigate();
        //     navigate("/cart");
        // }, 3000);
    }
    const data = detalle

        return (
            <div className="item-detail">
                    <img src={data.img} alt={data.nombre} />
                    <h3>Precio ${data.precio}.-</h3>
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>   
            </div>
            )

}

export default ItemDetail