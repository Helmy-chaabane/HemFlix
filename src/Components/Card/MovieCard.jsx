import React from "react";
import { useHistory } from "react-router";
import cover from "../../Images/cover.jpg";

const MovieCard = () => {
  const history = useHistory();
  return (
    <div className="movie__card" onClick={() => history.push("/movie")}>
      <img src={cover} alt="card_img" className="movie__card--img" />
      <h6>Collateral</h6>
    </div>
  );
};

export default MovieCard;
