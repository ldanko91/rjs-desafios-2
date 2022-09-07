import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import tanquesImpor from '../../assets/js/newtanques'


function ItemListContainer () {
    const {rubroParam} = useParams()
    console.log(rubroParam)

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
            if (!rubroParam) {
                try {
                    const listadoTanques = await obtenerTanques();
                    setTanques(listadoTanques);

                } catch (error) {
                    console.log('Error 404: Not found')
                }
            }else{
            
                try {
                    const listadoTanques = await obtenerTanques();
                    setTanques(listadoTanques.filter(item=>item.rubro === rubroParam));
                    
                } catch (error) {
                    console.log('Error 404: Not found')
                }
            }
        }
        procAsync();
    },[rubroParam])

        return (
            
            tanques.length>0 &&
                <>
                    <ItemList tanque={tanques}></ItemList>
                    {console.log(tanques)}
                </>
        
    )
}

export default ItemListContainer;
