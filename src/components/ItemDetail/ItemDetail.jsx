import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({detalle}) => {
    const data = detalle

        return (
            <div className="item-detail">
                    <img src={data.img} alt={data.nombre} />
                    <h3>Precio ${data.precio}.-</h3>
                    <ItemCount stock={data.stock} initial={1}/>   
            </div>
            )

}

export default ItemDetail