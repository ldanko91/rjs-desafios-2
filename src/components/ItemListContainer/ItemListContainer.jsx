import React, { useEffect, useState } from 'react'
import {ItemList} from '../ItemList/ItemList'
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
    },[])

        return (
            
            tanques.length>0 &&
                <>
                    <ItemList id={tanques.id} nombre={tanques.nombre} precio={tanques.precio}></ItemList>
                </>
        
    )
}

export default ItemListContainer;


// id={tanques.id} nombre={tanques.nombre} precio={tanques.precio}


// <section>
        //     <div><h2>Listado de artículos</h2></div>
        //     <div>
        //     <ul><p>Producto A $245</p><ItemCount stock={7} initial={1}/></ul>
        //     <ul><p>Producto B $995</p><ItemCount stock={4} initial={1}/></ul>
        //     <ul><p>Producto C $546</p><ItemCount stock={3} initial={1}/></ul>
        //     <ul><p>Producto D $124</p><ItemCount stock={10} initial={1}/></ul></div>
        // </section>  