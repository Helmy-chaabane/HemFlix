import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import InputLogin from "../../Components/Inputs/InputLogin";
import OkSVG from "../../SVG/OkSVG";
import {
  USER_SUBMITTING,
  INITIAL_USER,
  USER_LOG,
  SET_USER,
} from "../../Redux/reducers/user";
import { ADD_NOTIFICATION } from "../../Redux/reducers/notifications";
import { getUser } from "../../Redux/selectors/user";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleErrors = () => {
    let errorFound = false;
    if (user.username === "") {
      dispatch(
        SET_USER({
          champ: "usernameError",
          value: "username is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (user.password === "") {
      dispatch(
        SET_USER({
          champ: "passwordError",
          value: "password is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    return errorFound;
  };

  const onSubmit = (e) => {
    dispatch(USER_SUBMITTING({}));
    e.preventDefault();

    if (!handleErrors()) {
      dispatch(USER_SUBMITTING({}));
      dispatch(USER_LOG({}));
      history.push("/");
      dispatch(
        ADD_NOTIFICATION({
          Icon: () => (
            <OkSVG classname="notification__icon notification__icon--ok" />
          ),
          Title: () => <h6>welcome</h6>,
          Description: () => (
            <React.Fragment>
              <p className="notification__description">
                Wecolme home{""}
                <span className="notification__user">{user.username}, </span>
                Hope you like our finest movies here in
                {<span className="notification__special"> HEMFLIX.</span>}{" "}
              </p>
              <p className="notification__tip">
                Please do not reload the page! we are using static data but it
                can be modified
              </p>
            </React.Fragment>
          ),
          duration: 9,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(INITIAL_USER({}));
  }, [dispatch]);

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
            placeholder="Username"
            type="text"
            name="username"
            disable={user.Submiting}
            error={user.usernameError}
            SET={SET_USER}
          />

          <InputLogin
            placeholder="Password"
            type="password"
            name="password"
            disable={user.Submiting}
            error={user.passwordError}
            SET={SET_USER}
          />

          <button
            className={`login__btn ${
              user.Submiting && "login__btn--submiting"
            }`}
            disabled={user.Submiting}
          >
            <span>Sign in</span>
          </button>
        </form>

        <Link to="/signup" className="login__signup">
          Sign Up <span className="login__signup--arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
