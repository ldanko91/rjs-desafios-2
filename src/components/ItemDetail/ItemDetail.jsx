import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
// import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useEffect } from 'react'


const ItemDetail = ({detalle}) => {
    const {addProduct} = useContext(CartContext); 
    const onAdd= (count) =>{
        addProduct(detalle, count)
        }

            return (
                <div className="item-detail">
                    <img src={detalle.img} alt={detalle.nombre} />
                    <h3>Precio ${detalle.precio}.-</h3>
                    <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd}/>   
                </div>
            )
}


export default ItemDetail



// const {addProduct} = useContext(CartContext);        
//         useEffect(()=>{
                    
//             const newProduct = {...detalle, quantity: count}
//                 console.log('newProduct', newProduct)
//                 addProduct(newProduct)
//         },[onAdd])
//         if (onAdd) {
            
//             return (
//                 <div className="item-detail">
//                     <img src={detalle.img} alt={detalle.nombre} />
//                     <h3>Precio ${detalle.precio}.-</h3>
//                     <Link to='/cart'><button>Finalizar compra!</button></Link>
//                 </div>
//             )
//         } else {
//             return (
//                 <div className="item-detail">
//                     <img src={detalle.img} alt={detalle.nombre} />
//                     <h3>Precio ${detalle.precio}.-</h3>
//                     <ItemCount stock={detalle.stock} initial={1} onAdd={setOnAdd} qty={setQty}/>   
//                 </div>
//             )
//         }
// }