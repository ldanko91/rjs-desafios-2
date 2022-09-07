import './App.css';
import './components/navbar/Navbar.css'
import './components/CartWidget/CartWidget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

function App() {
  
  return (
    <BrowserRouter>

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:rubroParam' element={<ItemListContainer/>}/>
        <Route path='/items/:idParam' element={<ItemDetailContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={<ItemListContainer/>}/>
      </Routes>
      
    </div>
  
    </BrowserRouter>
  );

  
}

export default App;
