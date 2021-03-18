import React from "react";
import Actor from "./Actor";
import "./actors.scss";
const Actors = () => {
  return (
    <div className="actors">
      <header className="actors__intro">
        <h1 className=" fade-right">Greatest actors of all time (G.O.A.Ts).</h1>
      </header>
      <div className="actors__list">
        <Actor />
        <Actor />
        <Actor />
        <Actor />
      </div>
    </div>
  );
};

export default Actors;
