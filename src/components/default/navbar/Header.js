import React from "react";
import { Link } from "react-router-dom";
import style from "../navbar/nav.module.scss";

export default function Header() {
  return (
    <div className={style.header_Content}>
      <ul>
          <li>Home</li>
          <li>Logout</li>
      </ul>
    </div>
  );
}
