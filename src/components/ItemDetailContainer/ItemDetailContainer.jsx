import '../ItemDetailContainer/ItemDetailContainer.css'
import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../utils/firebase'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import CardGroup from 'react-bootstrap/CardGroup';

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
    <CardGroup class='detail-card-group'>
        <h2>Detalle del producto: {tanques.nombre}</h2>
        <div className="item-container">
            <ItemDetail detalle={tanques}></ItemDetail>
        </div>
    </CardGroup>
    )
}

export default ItemDetailContainer