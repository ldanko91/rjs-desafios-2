import carrito from '../../assets/images/carrito-png.png';

function CartWidget () {
    return (
        <a href='#'><img src={carrito} alt='carrito-png' class='carrito'/><p class='count-items'>3</p></a>       
)}

export default CartWidget;
