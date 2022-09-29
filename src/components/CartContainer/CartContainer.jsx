import { React, useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { db } from '../../utils/firebase';
import {collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';

function CartContainer() {
    const { productCartList, deleteProduct, clearProductCartList, precioTotal } = useContext(CartContext);

    // const [idOrder, setIdOrder] = useState("");
    // const [ordenCheck, setOrdenCheck] = useState ("");

    const sendOrder = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: productCartList,
            total: precioTotal(),
            fecha: serverTimestamp(),
            estado: "Orden registrada. Aguarda despacho."
        }
        
        const queryRef = collection(db, "orders");
        
        addDoc(queryRef, order).then(respuesta => {
            Swal.fire(
                '¡Tu orden fue registrada exitosamente!',
                `Tus ${productCartList.length} productos fueron registrados con el ID: ${respuesta.id}. A la brevedad nos comunicaremos, ¡gracias! `,
                'success')
        })
    }

    // const checkOrder = (e) => {
        
    //         useEffect(()=>{
    //             const queryRef = doc(db,"orders",e.target[0].value);
    //             getDoc(queryRef).then(response=>{
    //                 const newDoc = {
    //                     ...response.data(),
    //                 }
    //                 setOrdenCheck(newDoc);
    //             }).catch(error=>console.log(error));
            
    //         },[])
    
    //         console.log(ordenCheck)
    // }


    return (
        <div>
            
            {
                productCartList.length>0 ?
                    <>
                        {
                        productCartList.map(item=>(
                            
                            <>
                                <p>{item.quantity}</p>
                                <p>{item.nombre}</p>
                                <p>Precio unitario: ${item.precio}.-</p>
                                <p>Subtotal: ${item.totPrice}.-</p>
                                <button onClick={()=>deleteProduct(item.id)}>Eliminar del carrito</button>
                                <br/>
                            </>
                            ))
                        }
                            <>
                            <br/>
                                <button onClick={clearProductCartList}>Vaciar Carrito</button>
                                <h2>El total de tu compra es ${precioTotal()}.-</h2>
                            <br/>
                                <form onSubmit={sendOrder}>
                                <input type="text" placeholder='Nombre y apellido'/><br/>
                                <input type="text" placeholder='Telefono'/><br/>
                                <input type="email" placeholder='email'/><br/>
                                <button type='submit'>¡Comprar!</button>
                                </form>
                           </>
                    </>
                :
                    <>
                        <p>El carrito está vacío!</p>
                        <Link to='/'><button>Ir a la tienda!</button></Link>
                    </>
            }
            
            {/* <>
                <h2>Consultar pedidos</h2>
                <form onSubmit={checkOrder}>
                    <input type="text" placeholder='ID de orden'/><br/>
                    <button type='submit'>¡Comprar!</button>
                </form>
            </> */}

        </div>
    );
}

export default CartContainer;