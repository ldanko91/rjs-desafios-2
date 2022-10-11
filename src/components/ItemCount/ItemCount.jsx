import '../ItemCount/ItemCount.css'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [itemCount, setitemCount] = useState (initial);
    
    const adItem = ()=>{
        if (itemCount<stock) {
        setitemCount(itemCount + 1)
        }
    }

    const subItem = () =>{
        if (itemCount>1) {
        setitemCount(itemCount - 1)
        }
    }

    return (
        <Card id='count-card'>
                <Card.Body class='body-count'>
                    <Card.Text>
                        <Button variant="secondary" onClick={adItem}>+</Button>
                        <p class='recuento'>{itemCount}</p>
                        <Button variant="secondary" onClick={subItem}>-</Button> <br></br>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => { onAdd(itemCount) }} >Añadir al carrito!</Button>
                </Card.Footer>
        </Card>
    )
}

export default ItemCount;