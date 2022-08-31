import { Item } from "../Item/Item"
import React, { useState } from 'react'

const ItemList = (props) => {
    const [tanques, setTanques] = useState([]);
    setTanques(props);

    return (
        console.log(tanques) 
        // <>
        // {
        //     tanques.map((tanque)=>{
        //         return(
        //             <Item tanque={tanque}/>
        //             )
        //         })
        //     }
        // </>
    )
}

export default ItemList;