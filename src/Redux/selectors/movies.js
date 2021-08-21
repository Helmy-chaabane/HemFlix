import { createSelector } from "reselect";

export const getMovie = (movieId) =>
  createSelector(
    (state) => state.data.movies,
    (movies) => movies.find((movie) => movie.id === movieId)
  );

export const getCurrentGenre = createSelector(
  (state) => state.data.currentGenre,
  (currentGenre) => currentGenre
);

export const getMoviesByGenre = (genre) =>
  createSelector(
    (state) => state.data.movies,
    (movies) => movies.filter((movie) => movie.genre === genre)
  );

export const getLikedMovies = createSelector(
  (state) => state.data.movies,
  (movies) => movies.filter((movie) => movie.liked).length
);

export const getLikedMovieByGenre = (genre) =>
  createSelector(
    (state) => state.data.movies,
    (movies) => movies.filter((movie) => movie.liked && movie.genre === genre)
  );

export const getAllMovies = createSelector(
  (state) => state.data.movies,
  (movies) => movies
);
