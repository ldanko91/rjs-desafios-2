import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import tanquesImpor from '../../assets/js/newtanques'


function ItemListContainer () {
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
            try {
                const listadoTanques = await obtenerTanques();
                setTanques(listadoTanques);
                console.log('listado de tanques: ',listadoTanques);
            } catch (error) {
                console.log('Error 404: Not found')
            }
        }
        procAsync();
    },[tanques])

        return (
            
            tanques.length>0 &&
                <>
                    <ItemList tanque={tanques}></ItemList>
                    {console.log(tanques)}
                </>
        
    )
}

export default ItemListContainer;
