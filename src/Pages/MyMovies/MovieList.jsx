import React from "react";
import Movies from "../../Components/Movies/Movies";
const MovieList = ({ movies }) => {
  return movies.length !== 0 ? (
    <section className="mymovies__display">
      <h5>{movies[0].genre}</h5>
      <Movies movies={movies} />
    </section>
  ) : null;
};

export default MovieList;
