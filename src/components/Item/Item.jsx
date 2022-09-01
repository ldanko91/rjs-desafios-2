import  '../Item/Item.css'
import React, { useState } from 'react'

export const Item = ({tanque}) => {
    const [cantidad, setCantidad] = useState([]);

    const incrementar = ()=>{
        setCantidad(cantidad + 1);
    }

    return (
        <div className='itemTanque'>
            <p>{tanque.nombre}</p>
            <p>ID: {tanque.id}</p>
            <p>Precio: {tanque.precio}</p>
            <button onClick={incrementar}>+</button>
        </div>
    )
}