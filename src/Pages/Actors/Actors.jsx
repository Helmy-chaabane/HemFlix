import React from "react";
import { useSelector } from "react-redux";
import { getAllActors } from "../../Redux/selectors/actors";
import Actor from "./Actor";
import "./actors.scss";
const Actors = () => {
  const actors = useSelector(getAllActors);
  return (
    <div className="actors">
      <header className="actors__intro">
        <h1 className=" fade-right">Greatest actors of all time (G.O.A.Ts).</h1>
      </header>
      <div className="actors__list">
        {actors.map((actor) => (
          <Actor actor={actor} key={actor.id} />
        ))}
      </div>
    </div>
  );
};

export default Actors;
