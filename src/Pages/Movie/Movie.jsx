import React from "react";
import cover from "../../Images/bigCover.JPG";
import Heart from "../../SVG/Heart";
import "./movie.scss";

const Movie = () => {
  return (
    <div className="movie">
      <div
        className="movie__img"
        style={{
          backgroundImage: `linear-gradient(
           70deg,
            rgba(0, 0, 0,.7) 60%,
            rgba(0, 0, 0, 0.04)40%
                 ),url(${cover})`,
        }}
      >
        <div className="movie__container fade-left">
          <div className="movie__container--title">
            <h1>Collateral</h1>
            <Heart classname="movie__container--icon" />
          </div>
          <div className="movie__container--genre">
            <h2>Action</h2>
          </div>
          <div className="movie__container--description">
            <h3>Description </h3>
            <p>
              a contract killer named Vincent (Tom Cruise) hires a cab driver
              for a journey into a physical and psychological netherworld.
              "Collateral" opens with Tom Cruise exchanging briefcases with a
              stranger in an airport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
