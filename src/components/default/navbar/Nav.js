import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/user/action";
import style from "../navbar/nav.module.scss";


export default function Nav() {
  const dispatch = useDispatch()
  const authUser = window.localStorage.getItem("isLogin");
  return (
    <div className={style.navContent}>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/product"}>
          <li>Product</li>
        </Link>
        <Link to={"Favorite"}>
          <li>Favorite</li>
        </Link>
       { authUser === null?(
        <Link to={"login"}>
          <li>login</li>
        </Link>
       ) :
        <li>
          <button
            onClick={() => {
             dispatch(logOut())
             window.location.replace('/')
            }}
          >
            Logout
          </button>
        </li>
        }
      </ul>
    </div>
  );
}
