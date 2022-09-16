import carrito from '../../assets/images/carrito-png.png';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function CartWidget () {
    const {totalProds, productCartList} = useContext(CartContext);
    return (
        <div>    
            { productCartList.length >0 && 
                <>
                    <Link to='/cart'><img src={carrito} alt='carrito-png' class='carrito'/><p class='count-items'>{totalProds()}</p></Link>
                </>
            }
        </div>
)}

export default CartWidget;
