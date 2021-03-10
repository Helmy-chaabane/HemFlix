import React from "react";
import Navbar from "../Navbar/Navbar";

const Main = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="main">
        <Component />
      </main>
    </React.Fragment>
  );
};

export default Main;
