import React, { useState } from "react";
import style from "../login/login.module.scss"
import { changeUser } from "../../../redux/user/action";
import { useDispatch } from "react-redux";



function Form() {
  const [login, setLogin] = useState("");
  const [pasword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [reqError, setReqError] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.length === 0 || pasword.length === 0) {
      setError(true);
    }else{window.location.reload()
      dispatch(changeUser({login:login,password:pasword}))
    }
    
  };
  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit}>
        <label>{reqError && reqError}</label>
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
