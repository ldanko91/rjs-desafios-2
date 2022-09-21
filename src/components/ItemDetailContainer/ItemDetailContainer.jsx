import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../utils/firebase'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

const {idParam} = useParams()
const [tanques, setTanques] = useState([]);
    


useEffect(()=>{
    const queryRef = doc(db,"items",idParam);
    getDoc(queryRef).then(response=>{
        const newDoc = {
            ...response.data(),
            id:response.id
        }
        setTanques(newDoc);
    }).catch(error=>console.log(error));

},[idParam])

return (
    <div className="item-container">
            <h1>Detalle del producto: {tanques.nombre}</h1>
            <ItemDetail detalle={tanques}></ItemDetail>        
    </div>
    )
}

export default ItemDetailContainer