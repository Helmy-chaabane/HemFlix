import React from "react";
import { useSelector } from "react-redux";
import { getMovie } from "../../Redux/selectors/movies";
import Heart from "../../SVG/Heart";
import "./nicer.scss";

const Nicer = ({ id }) => {
  const firstMovie = useSelector(getMovie(13));
  const secondMovie = useSelector(getMovie(15));

  return (
    <div className="nicer">
      <div className="nicer__container">
        <div className="nicer__card nicer__card--second">
          <h2 className="nicer__card--title">{firstMovie.title}</h2>
          <h6 className="nicer__card--genre">{firstMovie.genre}</h6>
          <p className="nicer__card--parag">{firstMovie.description}</p>
          <div className="nicer__card--like">
            <Heart
              id={firstMovie.id}
              title={firstMovie.title}
              like={firstMovie.liked}
              classname={`movie__container--icon  ${
                firstMovie.liked && "movie__container--icon--liked"
              }`}
            />
          </div>
        </div>
        <div className="nicer__card nicer__card--first">
          <img
            src={firstMovie.cover}
            alt="cardcover"
            className="nicer__card--img"
          />
        </div>
      </div>
      <div className="nicer__container">
        <div className="nicer__card nicer__card--second">
          <h2 className="nicer__card--title">{secondMovie.title}</h2>
          <h6 className="nicer__card--genre">{secondMovie.genre}</h6>
          <p className="nicer__card--parag">{secondMovie.description}</p>
          <div className="nicer__card--like">
            <Heart
              id={secondMovie.id}
              title={secondMovie.title}
              like={secondMovie.liked}
              classname={`movie__container--icon  ${
                secondMovie.liked && "movie__container--icon--liked"
              }`}
            />
          </div>
        </div>
        <div className="nicer__card nicer__card--first">
          <img
            src={secondMovie.cover}
            alt="cardcover"
            className="nicer__card--img"
          />
        </div>
      </div>
    </div>
  );
};

export default Nicer;
