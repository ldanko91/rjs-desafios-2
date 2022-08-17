import logo from './logo.svg';
import './App.css';
import './components/navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar> 
      </header>
    </div>
  );
}

export default App;
