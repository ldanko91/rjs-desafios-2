import { Item } from "../Item/Item"
import { Link } from "react-router-dom"
import CardGroup from 'react-bootstrap/CardGroup';



const ItemList = ({tanque}) => {
    
    const tanques = tanque

    return (
        <>
        <CardGroup>
        {
            tanques.map((tanque)=>{
                return(
                    
                        <Link key={tanque.id} to={`/items/${tanque.id}`}>
                            <Item tanque={tanque}/>
                        </Link>
                    
                    )
                })
            }
        </CardGroup>
        </>
    )
}

export default ItemList;
