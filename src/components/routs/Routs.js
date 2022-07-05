import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "../product/ProductList";
import Favorite from "../favorite/Favorite";
import Login from "../login/Login";
import Nav from "../navbar/Nav";

export default function Routs(props) {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}
