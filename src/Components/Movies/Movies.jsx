import React from "react";
import MovieCard from "../Card/MovieCard";
import "./movies.scss";

const Movies = () => {
  return (
    <div className="movies__list">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Movies;
