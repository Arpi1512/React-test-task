import React, { useState } from "react";
import style from "../login/login.module.scss";
import { changeUser } from "../../../redux/user/action";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const [login, setLogin] = useState("");
  const [pasword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [reqError, setReqError] = useState("");
  const info = useSelector((s) => s.users.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.length === 0 || pasword.length === 0) {
      setError(true);
    } else if (login !== info.login && pasword !== info.password) {
      setReqError("invalid password or email");
    } else {
      window.location.reload();
      dispatch(changeUser({ login: login, password: pasword }));
    }
  };
  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit}>
        <label>{reqError}</label>
        <div>
          <input
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        {error && login.length <= 0 ? <label>Login can't be Empty</label> : ""}
        <div>
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && pasword.length <= 0 ? (
          <label>Password can't be Empty</label>
        ) : (
          ""
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
