import './App.css';
import './components/navbar/Navbar.css'
import './components/CartWidget/CartWidget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar><CartWidget></CartWidget></Navbar>
      </header>
      <ItemDetailContainer/>
      {/* <ItemListContainer></ItemListContainer> */}
    </div>
  );
}

export default App;
