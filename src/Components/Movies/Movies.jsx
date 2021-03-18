import React from "react";
import MovieCard from "../Card/MovieCard";
import "./movies.scss";

const Movies = ({ movies }) => {
  return (
    <div className="movies__list">
      {movies.map((movie) => (
        <MovieCard
          image={movie.cover}
          title={movie.title}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default Movies;
