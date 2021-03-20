import React from "react";
import Navbar from "../Navbar/Navbar";
import NotificationContainer from "../Notification/NotificationContainer";

const Main = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="main">
        <Component />
        <NotificationContainer />
      </main>
    </React.Fragment>
  );
};

export default Main;
