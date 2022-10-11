import  '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';

export const Item = ({tanque}) => {   

    return (
        <div className='itemTanque'>
            <Card class='card-card'>
                <Card.Img variant="top" src={tanque.img} class='img-tanq'/>
                <Card.Body class='body-card'>
                    <Card.Title class='titulo-card'>{tanque.nombre}</Card.Title>
                    <Card.Text class='texto-card'>
                        Precio: ${tanque.precio} <br/>
                        <span class='id-card'>ID: {tanque.id}</span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    )
}
