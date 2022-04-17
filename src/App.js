import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/checkout' element={<Checkout/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
