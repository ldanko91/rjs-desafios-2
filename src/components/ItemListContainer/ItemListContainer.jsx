import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/firebase';


function ItemListContainer () {
    const {rubroParam} = useParams()

    const [tanques, setTanques] = useState([]);
    
    useEffect(()=>{
        const obtenerTanques = async()=>{
            try{
                const queryRef = !rubroParam ? collection(db,"items") 
                : 
                query(collection(db,"items"),where("rubro","==",rubroParam));
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setTanques(datos)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerTanques();

    },[rubroParam])



        return (
            
            tanques.length>0 &&
                <>
                    <ItemList tanque={tanques}></ItemList>
                </>
        
    )
}

export default ItemListContainer;
