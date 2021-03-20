import React from "react";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../Redux/reducers/user";

const InputLogin = ({ placeholder, type, name, error }) => {
  const dispatch = useDispatch();
  return (
    <div className="login__input">
      <input
        className="login__input--input"
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        name={name}
        onChange={(e) => {
          dispatch(SET_USER({ champ: name, value: e.currentTarget.value }));
          dispatch(SET_USER({ champ: `${name}Error`, value: "" }));
        }}
      />
      {error && (
        <div className="login__input--error">
          <h6>{error}</h6>
        </div>
      )}
    </div>
  );
};

export default InputLogin;
