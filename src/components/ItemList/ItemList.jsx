import { Item } from "../Item/Item"
import React, { useState } from 'react'

const ItemList = (props) => {
    
    const tanque = props;
    const tanques = Object.entries(tanque);

    return (
        // console.log(tanques) 
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