import { Item } from "../Item/Item"
import { Link } from "react-router-dom"


const ItemList = ({tanque}) => {
    
    const tanques = tanque

    return (
        <>
        <div>
        {
            tanques.map((tanque)=>{
                return(
                    <div >
                        <Link key={tanque.id} to={`/items/${tanque.id}`}>
                            <Item tanque={tanque}/>
                        </Link>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemList;