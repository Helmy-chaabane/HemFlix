import React from "react";
import { useHistory } from "react-router";

const MovieCard = ({ id, title, image }) => {
  const history = useHistory();
  return (
    <div className="movie__card" onClick={() => history.push(`/movie/${id}`)}>
      <img src={image} alt="card_img" className="movie__card--img" />
      <h6>{title}</h6>
    </div>
  );
};

export default MovieCard;
