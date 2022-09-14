import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { Button } from 'bootstrap';

function CartContainer() {
    const {productCartList, deleteProduct, clearProductCartList} = useContext(CartContext);
    console.log('productCL', productCartList)

    return (
        <div>
            Este es el carrito
            {
                productCartList.map(item=>(
                    <div>
                        <p>{item.quantity}</p>
                        <p>{item.nombre}</p>
                        <p>Precio unitario: ${item.precio}.-</p>
                        <button onClick={()=>deleteProduct(item.id)}>Eliminar del carrito</button>
                    </div>
                ))
            }
            <button onClick={clearProductCartList}>Vaciar Carrito</button>
        </div>
    );
}

export default CartContainer;