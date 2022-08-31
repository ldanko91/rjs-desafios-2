import { Item } from "../Item/Item"
import React, { useState } from 'react'

export const ItemList = (props) => {
    const [tanque, setTanque] = useState();

    }

    return (
        <div>
        {
            tanque.map((tanque)=>{
                return(
                    <Item tanque={tanque}/>
                    )
                })
            }
        </div>
    )

