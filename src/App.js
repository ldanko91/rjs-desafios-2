import logo from './logo.svg';
import carrito from './assets/images/carrito-png.png'
import './App.css';
import './components/navbar/Navbar.css'
import './components/CartWidget/CartWidget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ILC from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar><CartWidget></CartWidget></Navbar>
       <ILC propiedad="greeting"></ILC>
      </header>
    </div>
  );
}

export default App;
