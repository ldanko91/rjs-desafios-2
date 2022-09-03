import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getFetch from '../../helper/helper'


const ItemDetailContainer = () => {
  const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
    getFetch
    .then(response => {
        setData(response.find(prod => prod.id === 500))
        setLoading(false)
    })
}, [])

console.log(data)

  return (
    <div className="item-container">
            <h1>Detalle del producto: {data.name}</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <ItemDetail detalle={data}></ItemDetail>
        }
        
    </div>
  )
}

export default ItemDetailContainer