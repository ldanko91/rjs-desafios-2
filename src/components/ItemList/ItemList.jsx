import { Item } from "../Item/Item"


const ItemList = ({tanque}) => {
    
    const tanques = tanque

    return (
        <>
        <div>
        {
            tanques.map((tanque)=>{
                return(
                    <div >
                    <Item tanque={tanque}/>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemList;