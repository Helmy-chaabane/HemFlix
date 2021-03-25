import React from "react";
import { useDispatch } from "react-redux";

const InputLogin = ({ placeholder, type, name, error, SET }) => {
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
          dispatch(SET({ champ: name, value: e.currentTarget.value }));
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
