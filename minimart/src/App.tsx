import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import React from "react";
import Food from "./components/Food";
import Electronics from "./components/Electronics";
import Clothing from "./components/Clothing";
import Products from "./components/Products";

function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/h' element={<Home />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/p' element={<Products />}></Route>
      <Route path='/f' element={<Food />}></Route>
      <Route path='/e' element={<Electronics />}></Route>
      <Route path='/c' element={<Clothing />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}
export default App;