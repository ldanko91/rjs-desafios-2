import './App.css';
import { CartProvider } from './context/CartContext';
import './components/navbar/Navbar.css'
import './components/CartWidget/CartWidget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>

    <div className="App">
      <Navbar/>
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
