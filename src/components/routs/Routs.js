import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Product from "../default/product/ProductList";
import Favorite from "../default/favorite/Favorite";
import Login from "../default/login/Login";
import Home from "../default/homepage/Home";
import Nav from "../default/navbar/Nav";
import { useSelector } from "react-redux";



export default function Routs() {
  const authUser = window.localStorage.getItem("isLogin");
  const  isLogin  = useSelector(state => state.users.isLogin);
  return (
    <Router>
       {window.location.path !== "/"?<Nav/>: ""}
      <Routes>
        <Route
          exact
          path="/"
          element={isLogin===true || authUser ? <Home /> : <Login />}
        />
         <Route path="/login" element={isLogin === true || authUser ? <Product />:<Login/> }/>
        <Route path="/product" element={isLogin === true || authUser ? <Product />:<Login/> }/>
        <Route path="/favorite" element={isLogin === true || authUser ? <Favorite/>:<Login/>}/>
      </Routes>
    </Router>
  );
}
