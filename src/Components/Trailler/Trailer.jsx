import React, { useRef } from "react";
import bigCover from "../../Images/collateral_bigCover.jpg";
import { useSelector } from "react-redux";
import { getMovie } from "../../Redux/selectors/movies";
import "./trailer.scss";

const Trailer = ({ movieId, trailer }) => {
  const movie = useSelector(getMovie(movieId));
  console.log(trailer);
  const ref = useRef();
  return (
    <div className="trailer">
      <img
        src={movie.cover}
        alt="trailer"
        className="trailer__img"
        onMouseEnter={() => ref.current.play()}
        onMouseLeave={() => ref.current.pause()}
        onClick={() => `/movie/${movie.id}`}
      />
      <video
        ref={ref}
        muted={false}
        className="trailer__video"
        loop
        preload="auto"
        poster={bigCover}
        src={trailer}
      ></video>
    </div>
  );
};

export default Trailer;
