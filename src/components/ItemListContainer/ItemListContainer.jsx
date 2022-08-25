import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer (props) {
    console.log(props)
    return (
        <section>
            <div><h2>Listado de artículos</h2></div>
            <div>
            <ul><p>Producto A $245</p><ItemCount stock={7} initial={1}/></ul>
            <ul><p>Producto B $995</p><ItemCount stock={4} initial={1}/></ul>
            <ul><p>Producto C $546</p><ItemCount stock={3} initial={1}/></ul>
            <ul><p>Producto D $124</p><ItemCount stock={10} initial={1}/></ul></div>
        </section>       
)}

export default ItemListContainer;