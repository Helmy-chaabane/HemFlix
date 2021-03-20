import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getUserLog } from "../../Redux/selectors/user";
import Main from "../MainContent/Main";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(getUserLog);

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Main component={Component} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
