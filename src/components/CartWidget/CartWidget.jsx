import carrito from '../../assets/images/carrito-png.png';
import {Link} from 'react-router-dom'

function CartWidget () {
    return (
        <Link to='/cart'><img src={carrito} alt='carrito-png' class='carrito'/><p class='count-items'>3</p></Link>       
)}

export default CartWidget;
