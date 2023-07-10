
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from "./Components/Home";
import './Components/Register.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

      </BrowserRouter>
        </div>
     
  );
}

export default App;
