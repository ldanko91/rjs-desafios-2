import '../ItemCount/ItemCount.css'
import { useState } from "react";
import Button from 'react-bootstrap/Button';


const ItemCount = ({stock, initial, onAdd}) => {
    const [itemCount, setitemCount] = useState (initial);

    const adItem = ()=>{
        if (itemCount<stock) {
        setitemCount(itemCount + 1)
        }else{}
    }

    const subItem = () =>{
        if (itemCount>1) {
        setitemCount(itemCount - 1)
        }else{}
    }

    return(
        <div>
            <Button variant="secondary" onClick={adItem}>+</Button><p class='Recuento'>{itemCount}</p><Button variant="secondary" onClick={subItem}>-</Button>
        </div>
    )
}

export default ItemCount;