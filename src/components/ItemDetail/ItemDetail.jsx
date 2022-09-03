import {useState,useEffect} from 'react'
import getFetch from '../../helper/helper'
import './ItemDetail.css'

const ItemDetail = ({detalle}) => {
    const data = detalle

        return (
            <div className="item-detail">
                    <img src={data.img} alt="" />
                    <h2>{data.name}</h2>
                    <h3>${data.price}.-</h3>   
            </div>
            )

}

export default ItemDetail