import React from "react";
import { Link } from "react-router-dom";
import style from "../navbar/nav.module.scss";

export default function Nav() {
  return (
    <div className={style.navContent}>
      <ul>
        <Link to={"/product"}>
          <li>Product</li>
        </Link>
        <Link to={"Favorite"}>
          <li>Favorite</li>
        </Link>
        <Link className={style.li} to={"/login"}>
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
