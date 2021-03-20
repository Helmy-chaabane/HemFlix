import React from "react";
import Trailer from "../../Components/Trailler/Trailer";

const Actor = ({ actor }) => {
  return (
    <section className="actor fade-left">
      <img src={actor.image} alt="actor_photo" className="actor__img" />
      <div className="actor__container">
        <h6 className="actor__name">{actor.name}</h6>
        <p className="actor__description">{actor.description}</p>
        <div className="actor__movies">
          <ul className="actor__movies--list">
            <li className="actor__movies--item">
              <Trailer movieId={actor.movieId} trailer={actor.trailer} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Actor;
