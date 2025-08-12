import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './Header'
import Login from  './Login'
import Register from  './Register'
import AddProduct from  './AddProduct'
import UpdateProduct from  './UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
