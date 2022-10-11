import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card';


const ItemDetail = ({detalle}) => {
    const {addProduct} = useContext(CartContext); 
    const onAdd= (count) =>{
        addProduct(detalle, count)
        }

    return (
        <>
            <Card id='det-card'>
                <Card.Img variant="top" src={detalle.img} alt={detalle.nombre} class='img-det' />
                <Card.Body class='card-det'>
                    <Card.Title class='titulo-card'>{detalle.nombre}</Card.Title>
                    <Card.Text class='texto-card'>
                        Precio unitario: ${detalle.precio}.- <br />
                        <span class='id-card'>ID: {detalle.id}</span>
                    </Card.Text>
                </Card.Body>
            </Card>

            <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd} />
        </>
    )
}


export default ItemDetail
