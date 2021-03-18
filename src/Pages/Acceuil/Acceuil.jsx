import React from "react";
import Movies from "../../Components/Movies/Movies";
import { useSelector } from "react-redux";
import {
  getCurrentGenre,
  getMoviesByGenre,
} from "../../Redux/selectors/movies";
import "./acceuil.scss";
import ListItem from "./ListItem";

const Acceuil = () => {
  const currentGenre = useSelector(getCurrentGenre);
  const moviesByGenres = useSelector(getMoviesByGenre(currentGenre));

  return (
    <div className="acceuil">
      <section className="acceuil__header">
        <div className="acceuil__header--container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h6>Watch anywhere. Cancel anytime.</h6>
        </div>
      </section>

      <section className="acceuil__movies">
        <div className="acceuil__movies--intro">
          <h2>Here's our finest Movies</h2>
        </div>
        <div className="acceuil__movies--container">
          <div className="acceuil__movies--categories">
            <ul className="acceuil__movies--items">
              <ListItem currentGenre={currentGenre} genre="horror" />
              <ListItem currentGenre={currentGenre} genre="drama" />
              <ListItem currentGenre={currentGenre} genre="action" />
              <ListItem currentGenre={currentGenre} genre="animation" />
              <ListItem currentGenre={currentGenre} genre="fantasy" />
              <ListItem currentGenre={currentGenre} genre="comedy" />
            </ul>
          </div>
          <div className="acceuil__movies--lists">
            <Movies movies={moviesByGenres} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
