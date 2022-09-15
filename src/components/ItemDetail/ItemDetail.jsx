import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({detalle}) => {
    const {addProduct} = useContext(CartContext);
    const data = detalle
    const [onAdd, setOnAdd] = useState(false);
        if (onAdd) {
            return (
                <div className="item-detail">
                    <img src={data.img} alt={data.nombre} />
                    <h3>Precio ${data.precio}.-</h3>
                    <Link to='/cart'><button>Finalizar compra!</button></Link>
                </div>
            )
        } else {
            return (
                <div className="item-detail">
                    <img src={data.img} alt={data.nombre} />
                    <h3>Precio ${data.precio}.-</h3>
                    <ItemCount stock={data.stock} initial={1} onAdd={setOnAdd}/>   
                </div>
            )
        }
}


export default ItemDetail


// // setCuenta(contador)
// console.log(contador)
// // console.log(`Has añadido ${cuenta} unidades al carrito`)
// const newProduct = {...detalle, qty: contador}
// console.log('newProduct', newProduct)
// addProduct(newProduct)