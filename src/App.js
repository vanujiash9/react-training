import { Routes, Route } from "react-router-dom";
import "./App.css";
// import BT1 from "./bt1/bt1";
import BT4 from "./bt4/BT4";
import Login from "./bt4/login";
// import BT2 from "./bt2/bt2";
import Home from "./bt4/pages/Home";
import Product from "./bt4/pages/Product";
import About from "./bt4/pages/About";

import Register from "./bt4/pages/Register";
import ProductList from "./bt4/pages/ProductList";


function App() {
  return (
    <Routes>
      {/* <Route path="/bt1" element={<BT1 />} /> */}
      {/* <Route path="/bt2" element={<BT2 />} /> */}
      {/* <Route path="/bt3" element={<BT3 />} /> */}
      <Route path="/bt4" element={<BT4 />} >
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About/>} />
        <Route path="home" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="product" element={<Product />} />
        <Route path="productList" element ={<ProductList/>} />
      </Route>
    </Routes>
  );
}

export default App;
