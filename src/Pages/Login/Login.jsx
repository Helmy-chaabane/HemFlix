import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputLogin from "../../Components/Inputs/InputLogin";
import LibrarySVG from "../../SVG/LibrarySVG";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const changeInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const onSubmit = () => {
    console.log("hey");

    alert("hey");
  };

  return (
    <div className="login__bg">
      <section className="login__container">
        <div className="login__bib">
          <LibrarySVG /> <span>libriria</span>
        </div>
        <div className="login_content">
          <div className="login__title">Sign in</div>
          <form className="login__info" onSubmit={onSubmit()}>
            <InputLogin
              placeholder="Username"
              type="text"
              name="username"
              value={user.username}
              changeInput={changeInput}
            />
            <InputLogin
              placeholder="Password"
              type="password"
              name="password"
              value={user.password}
              changeInput={changeInput}
            />
            <Link to="/" className="login__submit" onClick={() => onSubmit()}>
              Sign in
            </Link>
          </form>
        </div>
        <Link to="/" className="login__signup">
          Sign Up &rarr;
        </Link>
      </section>
    </div>
  );
};

export default Login;
