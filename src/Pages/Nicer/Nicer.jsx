import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Redux/selectors/movies";
import Heart from "../../SVG/Heart";
import LeftArrow from "../../SVG/LeftArrow";
import RightArrow from "../../SVG/RightArrow";
import "./nicer.scss";

const Nicer = () => {
  const cardRef = useRef();
  const [value, setValues] = useState(0);
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    cardRef.current.scrollLeft = value ? value : 0;
  }, [value]);
  return (
    <div className="nicer">
      <div className="nicer__ctn">
        <div className="nicer__container">
          <div className="nicer__card nicer__card--second">
            <h2 className="nicer__card--title">{movies[0].title}</h2>
            <h6 className="nicer__card--genre">{movies[0].genre}</h6>
            <p className="nicer__card--parag">{movies[0].description}</p>
            <div className="nicer__card--like">
              <Heart
                id={movies[0].id}
                title={movies[0].title}
                like={movies[0].liked}
                classname={`movie__container--icon  ${
                  movies[0].liked && "movie__container--icon--liked"
                }`}
              />
            </div>
          </div>
          <div className="nicer__card nicer__card--first">
            <img
              src={movies[0].cover}
              alt="cardcover"
              className="nicer__card--img"
            />
          </div>
        </div>

        <div className="nicer__container">
          <div className="nicer__card nicer__card--second">
            <h2 className="nicer__card--title">{movies[1].title}</h2>
            <h6 className="nicer__card--genre">{movies[1].genre}</h6>
            <p className="nicer__card--parag">{movies[1].description}</p>
            <div className="nicer__card--like">
              <Heart
                id={movies[1].id}
                title={movies[1].title}
                like={movies[1].liked}
                classname={`movie__container--icon  ${
                  movies[1].liked && "movie__container--icon--liked"
                }`}
              />
            </div>
          </div>
          <div className="nicer__card nicer__card--first">
            <img
              src={movies[1].cover}
              alt="cardcover"
              className="nicer__card--img"
            />
          </div>
        </div>
      </div>

      <div className="scroll__container">
        <div
          className="scroll__arrow"
          onClick={() => {
            setValues(
              value -
                (window.innerWidth / 2 > 400
                  ? window.innerWidth / 2
                  : window.innerWidth - 100)
            );
          }}
        >
          <LeftArrow classname="scroll__arrow--left" />
        </div>
        <div className="scroll__cards" ref={cardRef}>
          {movies.map((movie, index) => (
            <div
              className={`scroll__cards--card  ${
                index === 2 && "scroll__cards--card--selected"
              }`}
            >
              <img
                src={movie.cover}
                alt="scrolimg"
                className="scroll__cards--card--img"
              />
            </div>
          ))}
        </div>
        <div
          className="scroll__arrow"
          onClick={() => {
            setValues(
              value +
                (window.innerWidth / 2 > 400
                  ? window.innerWidth / 2
                  : window.innerWidth - 100)
            );
          }}
        >
          <RightArrow classname="scroll__arrow--right" />
        </div>
      </div>

      {/* <div className="volume">
        <div className="volume__container">
          <div className="volume__bar volume__bar--1"></div>
          <div className="volume__bar volume__bar--4"></div>
          <div className="volume__bar volume__bar--5"></div>
          <div className="volume__bar volume__bar--2"></div>
          <div className="volume__bar volume__bar--3"></div>
        </div>
        </div>*/}

      {/* <div className="percent">
        <div className="percent__container"></div>
      </div> */}

      {/* <div className="loader-outer">
        <div className="loader">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
        </div>
        <h1 className="loader__text">Loading</h1>
        </div> */}
    </div>
  );
};

export default Nicer;
