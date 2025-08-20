import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from  './Login'
import Register from  './Register'
import AddProduct from  './AddProduct'
import UpdateProduct from  './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/add" element={
              <Protected comp={AddProduct}/>
            } />
            <Route path="/update/:id" element={
              <Protected comp={UpdateProduct}/>
            } />
            <Route path="/search" element={
              <Protected comp={SearchProduct}/>
            } />
            <Route path="/" element={
              <Protected comp={ProductList}/>
            } />
          </Routes>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
