import '../ItemCount/ItemCount.css'
import { useState } from "react";
import Button from 'react-bootstrap/Button';


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

    return(
        <div class='qSelector'>
            <Button variant="secondary" onClick={adItem}>+</Button>
            <p class='Recuento'>{itemCount}</p>
            <Button variant="secondary" onClick={subItem}>-</Button> <br></br>
            <Button variant="primary" onClick={()=>{onAdd(itemCount)}} >Añadir al carrito!</Button>
        </div>
    )
}

export default ItemCount;