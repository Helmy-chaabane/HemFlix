import React from "react";
import { useSelector } from "react-redux";
import {
  getLikedMovieByGenre,
  getLikedMovies,
} from "../../Redux/selectors/movies";
import MovieList from "./MovieList";
import "./mymovies.scss";

const MyMovies = () => {
  const likedMoviesLength = useSelector(getLikedMovies);
  const animations = useSelector(getLikedMovieByGenre("animation"));
  const horrors = useSelector(getLikedMovieByGenre("horror"));
  const actions = useSelector(getLikedMovieByGenre("action"));
  const fantasies = useSelector(getLikedMovieByGenre("fantasy"));
  const dramas = useSelector(getLikedMovieByGenre("drama"));
  const comedies = useSelector(getLikedMovieByGenre("comedy"));
  const animes = useSelector(getLikedMovieByGenre("anime"));

  return (
    <div className="mymovies">
      <header className="mymovies__intro">
        <h1 className="fade-right">
          Here you find your most favourite movies and TV shows.
        </h1>
      </header>

      {likedMoviesLength > 0 ? (
        <React.Fragment>
          <MovieList movies={actions} />
          <MovieList movies={horrors} />
          <MovieList movies={comedies} />
          <MovieList movies={fantasies} />
          <MovieList movies={dramas} />
          <MovieList movies={animations} />
          <MovieList movies={animes} />
        </React.Fragment>
      ) : (
        <div className="mymovies__empty">
          <h6> You didnt like any movie yet!</h6>
        </div>
      )}
    </div>
  );
};

export default MyMovies;
