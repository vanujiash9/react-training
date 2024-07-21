import { Routes, Route } from "react-router-dom";
import "./App.css";
import BT3 from "./bt3/bt3";
import BT1 from "./bt1/bt1";
import BT4 from "./bt4/BT4";
import Login from "./bt4/login";
import BT2 from "./bt2/bt2";
import Home from "./bt4/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/bt1" element={<BT1 />} />
      <Route path="/bt2" element={<BT2 />} />
      <Route path="/bt3" element={<BT3 />} />
      <Route path="/bt4" element={<BT4 />} >
      <Route path="login" element={<Login />} />
        <Route path="about" element={<Login />} />
        <Route path="home" element={<Home/>} />
        <Route path="register" element={<Login />} />
        <Route path="product" element={<Login />} />
        <Route path="product" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
