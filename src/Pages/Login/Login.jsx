import React, { useState } from "react";
import { useHistory } from "react-router";
import InputLogin from "../../Components/Inputs/InputLogin";
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const history = useHistory();

  const changeInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="login__bg">
      <div className="login__title">
        <h1>hemflix</h1>
      </div>
      <div className="login__container">
        <header className="ctn__title">
          <h6>Sign In</h6>
        </header>
        <form className="login__form" onSubmit={(e) => onSubmit(e)}>
          <InputLogin
            placeholder="username"
            type="text"
            changeInput={changeInput}
            name="username"
          />

          <InputLogin
            placeholder="password"
            type="text"
            changeInput={changeInput}
            name="password"
          />

          <button className="login__btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
