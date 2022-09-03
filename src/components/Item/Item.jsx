import  '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({tanque}) => {   

    return (
        <div className='itemTanque'>
            <img src={tanque.img} class='img-tanq'></img>
            <p>{tanque.nombre}</p>
            <p>ID: {tanque.id}</p>
            <p>Precio: {tanque.precio}</p>
            <ItemCount initial={1} stock={tanque.stock}></ItemCount>
        </div>

    )
}