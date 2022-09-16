import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { Button } from 'bootstrap';
import {Link} from 'react-router-dom';

function CartContainer() {
    const {productCartList, deleteProduct, clearProductCartList, precioTotal} = useContext(CartContext);


    return (
        <div>
            
            {
                productCartList.length>0 ?
                productCartList.map(item=>(
                    <>
                        <p>{item.quantity}</p>
                        <p>{item.nombre}</p>
                        <p>Precio unitario: ${item.precio}.-</p>
                        <p>Subtotal: ${item.totPrice}.-</p>
                        <button onClick={()=>deleteProduct(item.id)}>Eliminar del carrito</button>
                        <button onClick={clearProductCartList}>Vaciar Carrito</button>
                        <h2>El total de tu compra es ${precioTotal()}.-</h2>
                    </>
                ))
                :
                <>
                    <p>El carrito está vacío!</p>
                    <Link to='/'><button>Ir a la tienda!</button></Link>
                </>
            }
            
        </div>
    );
}

export default CartContainer;