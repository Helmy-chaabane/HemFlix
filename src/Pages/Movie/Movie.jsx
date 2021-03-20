import React from "react";
import Heart from "../../SVG/Heart";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getMovie } from "../../Redux/selectors/movies";
import "./movie.scss";

const Movie = () => {
  const { id } = useParams();
  const movie = useSelector(getMovie(parseInt(id)));
  return (
    <div className="movie">
      <div
        className="movie__img"
        style={{
          backgroundImage: `linear-gradient(to top right, rgb(10, 10, 10) 0px, rgba(10, 10, 10, 0.98) 10%, rgba(10, 10, 10, 0.97) 15%, rgba(10, 10, 10, 0.95) 25%, rgba(10, 10, 10, 0.94) 30%, rgba(10, 10, 10, 0.92) 35%, rgba(10, 10, 10, 0.9) 40%, rgba(10, 10, 10, 0.87) 55%, rgba(10, 10, 10, 0.82) 50%, rgba(10, 10, 10, 0.75) 65%, rgba(10, 10, 10, 0.63) 70%, rgba(10, 10, 10, 0.45) 75%, rgba(10, 10, 10, 0.27) 80%, rgba(10, 10, 10, 0.15) 80%, rgba(10, 10, 10, 0.08) 85%, rgba(10, 10, 10, 0.03) 95%, rgba(10, 10, 10, 0) 100%),url(${movie.bigImage})`,
        }}
      >
        <div className="movie__container fade-left">
          <div className="movie__container--title">
            <h1>{movie.title}</h1>
            <Heart
              like={movie.liked}
              title={movie.title}
              id={movie.id}
              classname={`movie__container--icon  ${
                movie.liked && "movie__container--icon--liked"
              }`}
            />
          </div>
          <div className="movie__container--genre">
            <h2>{movie.genre}</h2>
          </div>
          <div className="movie__container--description">
            <h3>Description </h3>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
