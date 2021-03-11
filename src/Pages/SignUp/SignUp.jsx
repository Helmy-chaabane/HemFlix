import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputLogin from "../../Components/Inputs/InputLogin";
import LibrarySVG from "../../SVG/LibrarySVG";
import "./signup.css";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const changeInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signup__bg">
      <div className="signup__container">
        <div className="signup__content">
          <header className="login__bib signup__header">
            <LibrarySVG classname="login__icon" /> <span>libriria</span>
          </header>
          <h2 className="login__title signup__title">Sign up</h2>
          <form className="signup__form">
            <InputLogin
              placeholder="Full Name "
              type="text"
              name="username"
              value={user.username}
              changeInput={changeInput}
            />
            <InputLogin
              placeholder="username "
              type="text"
              name="username"
              value={user.username}
              changeInput={changeInput}
            />
            <InputLogin
              placeholder="email "
              type="email"
              name="email"
              value={user.email}
              changeInput={changeInput}
            />

            <div className="signup__formgroup">
              <div className="signup__margin">
                <InputLogin
                  placeholder="password "
                  type="password"
                  name="password"
                  value={user.password}
                  changeInput={changeInput}
                />
              </div>
              <div className="signup__margin">
                <InputLogin
                  placeholder="confirm password "
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  changeInput={changeInput}
                />
              </div>
            </div>

            <Link to="/" className="login__submit signup__submit">
              Save
            </Link>
          </form>
          <Link to="/login" className="login__signup signup__btn">
            Sign in &rarr;
          </Link>
        </div>
        <div className="signup__image">
          <div className="signup__intro">
            <h1>Join us for infinite knowldge</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
