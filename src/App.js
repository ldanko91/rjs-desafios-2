import './App.css';
import './components/navbar/Navbar.css'
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar2 from './components/Navbar2/Navbar2';

function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>

    <div className="App">
      <Navbar2/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:rubroParam' element={<ItemListContainer/>}/>
        <Route path='/items/:idParam' element={<ItemDetailContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<ItemListContainer/>}/>
      </Routes>
      
    </div>
  
    </BrowserRouter>
    </CartProvider>
  );

  
}

export default App;
