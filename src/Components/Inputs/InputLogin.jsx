import React from "react";

const InputLogin = ({ placeholder, type, name, changeInput }) => {
  return (
    <input
      className="login__input"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={(e) => changeInput(name, e.currentTarget.value)}
      required
    />
  );
};

export default InputLogin;
