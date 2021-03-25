import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import InputLogin from "../../Components/Inputs/InputLogin";
import {
  SET_FORM,
  SET_ERROS,
  INITIAL_FORM,
  FORM_SUBMITTING,
} from "../../Redux/reducers/form";
import { ADD_NOTIFICATION } from "../../Redux/reducers/notifications";
import { SET_USER, USER_LOG } from "../../Redux/reducers/user";
import { getForm } from "../../Redux/selectors/form";
import OkSVG from "../../SVG/OkSVG";
import "./signup.scss";

const Signup = () => {
  const form = useSelector(getForm);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(INITIAL_FORM());
  }, [dispatch]);

  const handleErrors = () => {
    let errorFound = false;
    if (form?.user.fullname === "") {
      dispatch(
        SET_ERROS({
          champ: "fullname",
          value: "Fullname is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (form?.user.username === "") {
      dispatch(
        SET_ERROS({
          champ: "username",
          value: "Username is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (form?.user.password === "") {
      dispatch(
        SET_ERROS({
          champ: "password",
          value: "Password is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (form?.user.email === "") {
      dispatch(
        SET_ERROS({
          champ: "email",
          value: "Email is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (form?.user.confirm_password === "") {
      dispatch(
        SET_ERROS({
          champ: "confirm_password",
          value: "Confirm Password is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }
    if (form?.user.password === "") {
      dispatch(
        SET_ERROS({
          champ: "password",
          value: "password is Empty ! please fill the blank",
        })
      );
      errorFound = true;
    }

    if (form?.user.password !== form?.user.confirm_password) {
      dispatch(
        SET_ERROS({
          champ: "password",
          value: "Verify your password",
        })
      );

      dispatch(
        SET_ERROS({
          champ: "confirm_password",
          value: "Verify your password",
        })
      );
      errorFound = true;
    }

    return errorFound;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(FORM_SUBMITTING());
    if (!handleErrors()) {
      dispatch(FORM_SUBMITTING());
      dispatch(USER_LOG({}));
      dispatch(SET_USER({ champ: "password", value: form.user.password }));
      dispatch(SET_USER({ champ: "username", value: form.user.username }));
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
                <span className="notification__user">
                  {form.user.username},{" "}
                </span>
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

  return (
    <div className="signup">
      <div className="login__title">
        <h1>hemflix</h1>
      </div>

      <div className="signup__container">
        <header className="ctn__title">
          <h6>Sign Up</h6>
        </header>

        <form className="signup__form" onSubmit={(e) => onSubmit(e)}>
          <InputLogin
            type="text"
            name="fullname"
            placeholder="Fullname"
            error={form?.errors.fullname}
            value={form?.user.fullname}
            SET={SET_FORM}
          />
          <InputLogin
            type="email"
            name="email"
            placeholder="Email"
            error={form?.errors.email}
            value={form?.user.email}
            SET={SET_FORM}
          />
          <InputLogin
            type="text"
            name="username"
            placeholder="Username"
            error={form?.errors.username}
            value={form?.user.username}
            SET={SET_FORM}
          />
          <InputLogin
            type="password"
            name="password"
            placeholder="Password"
            error={form?.errors.password}
            value={form?.user.password}
            SET={SET_FORM}
          />
          <InputLogin
            placeholder="Confirm Password"
            type="password"
            name="confirm_password"
            error={form?.errors.confirm_password}
            value={form?.user.confirm_password}
            SET={SET_FORM}
          />

          <button
            className={`login__btn ${
              form.Submiting && "login__btn--submiting"
            }`}
          >
            <span>Sign up</span>
          </button>
        </form>
        <Link to="/login" className="login__signup">
          Sign In <span className="login__signup--arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
