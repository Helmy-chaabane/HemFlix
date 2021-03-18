import React from "react";
import Movies from "../../Components/Movies/Movies";
import "./mymovies.scss";
const MyMovies = () => {
  return (
    <div className="mymovies">
      <header className="mymovies__intro">
        <h1 className="fade-right">
          Here you find your most favourite movies and TV shows.
        </h1>
      </header>
      <section className="mymovies__display">
        <h5>Horror</h5>
        <Movies />
      </section>

      <section className="mymovies__display">
        <h5>Horror</h5>
        <Movies />
      </section>
    </div>
  );
};

export default MyMovies;
