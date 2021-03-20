import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { getMovie } from "../../Redux/selectors/movies";
import { useHistory } from "react-router";
import "./trailer.scss";

const Trailer = ({ movieId, trailer }) => {
  const movie = useSelector(getMovie(movieId));
  const history = useHistory();
  const ref = useRef();
  return (
    <div className="trailer">
      <img
        src={movie.cover}
        alt="trailer"
        className="trailer__img"
        onMouseEnter={() => ref.current.play()}
        onMouseLeave={() => ref.current.pause()}
        onClick={() => history.push(`/movie/${movie.id}`)}
      />
      <div className="trailer__container">
        {" "}
        <video
          ref={ref}
          muted={false}
          className="trailer__video"
          loop
          preload="auto"
          poster={movie.bigCover}
          src={trailer}
        ></video>
      </div>
    </div>
  );
};

export default Trailer;
