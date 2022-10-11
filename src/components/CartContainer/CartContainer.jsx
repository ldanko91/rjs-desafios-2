import '../CartContainer/CartContainer.css'
import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { db } from '../../utils/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CartContainer() {
    const { productCartList, deleteProduct, clearProductCartList, precioTotal } = useContext(CartContext);

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
            estado: "Orden registrada. Aguarda despacho.",
            formapago: e.target[3].value
        }

        const queryRef = collection(db, "orders");

        addDoc(queryRef, order).then(respuesta => {
            Swal.fire(
                '¡Tu orden fue registrada exitosamente!',
                `Tus ${productCartList.length} productos fueron registrados con el ID: ${respuesta.id}. A la brevedad nos comunicaremos, ¡gracias! `,
                'success')
        })
    }

    return (
        <div>

            {
                productCartList.length > 0 ?
                    <>
                        <CardGroup class='card-group'>
                            {
                                productCartList.map(item => (

                                    <>
                                        <Card id='card-card'>
                                            <Card.Img variant="top" src={item.img} class='img-tanq' />
                                            <Card.Body class='card-card'>
                                                <Card.Title class='titulo-card'>{item.nombre}</Card.Title>
                                                <Card.Text class='texto-card'>
                                                    Cantidad: {item.quantity} <br />
                                                    Precio unitario: ${item.precio}.- <br />
                                                    Subtotal: ${item.totPrice}.- <br />
                                                    <span class='id-card'>ID: {item.id}</span>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button variant="danger" onClick={() => deleteProduct(item.id)}>Eliminar del carrito</Button>
                                            </Card.Footer>
                                        </Card>
                                        <br />
                                    </>
                                ))
                            }
                            <Card>
                                <Card.Body>
                                    <h2>El total de tu compra es ${precioTotal()}.-</h2>
                                    <Button variant="danger" onClick={clearProductCartList}>Vaciar Carrito</Button>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Form onSubmit={sendOrder}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre y apellido</Form.Label>
                                            <Form.Control type="text" placeholder="Tu nombre completo" />
                                            <Form.Text className="text-muted">
                                                Como figura en tu DNI
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Número de teléfono</Form.Label>
                                            <Form.Control type="text" placeholder="Tu número de teléfono" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Tu correo electrónico" />
                                            <Form.Text className="text-muted">
                                                Solo usamos los datos para la entrega del producto
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Select aria-label="Forma de pago">
                                            <option>Selecciona la forma de pago</option>
                                            <option value="Transferencia">Transferencia bancaria</option>
                                            <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                                            <option value="Tarjeta de débito">Tarjeta de débito</option>
                                            <option value="Efectivo">Efectivo contra entrega</option>
                                        </Form.Select>

                                        <Button variant="success" type="submit">
                                            ¡Confirmar compra!
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </CardGroup>

                    </>
                    :
                    <>
                        <p>El carrito está vacío!</p>
                        <Link to='/'><Button variant="primary">Ir a la tienda!</Button></Link>
                    </>
            }



        </div>
    );
}

export default CartContainer;
