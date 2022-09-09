import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import tanquesImpor from '../../assets/js/newtanques'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

const {idParam} = useParams()
const [loading, setLoading] = useState(true)
const [tanques, setTanques] = useState([]);
    
    const obtenerTanques = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(tanquesImpor)
                reject('Error 404: Not found')
            }, 2000);
        })
    }

    useEffect(()=>{
        const procAsync = async()=>{
        setLoading(false)  

                try {
                    const prodSel = await obtenerTanques();
                    setTanques(prodSel.find(item=>item.id == idParam));
                    console.log('prodsel', prodSel);
                    console.log('tanques filtrada', tanques);
                    
                } catch (error) {
                    console.log('Error 404: Not found')
                }
                
            }
        
        procAsync();
        

    },[idParam])

  return (
    <div className="item-container">
            <h1>Detalle del producto: {tanques.nombre}</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <ItemDetail detalle={tanques}></ItemDetail>
        }
        
    </div>
  )
}

export default ItemDetailContainer