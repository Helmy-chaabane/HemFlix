import React from "react";
import Book from "../../Components/Card/Book";
import Rate from "../../Components/Card/Rate";
import photo from "../../Images/acceuilphoto.JPG";
import "./acceuil.css";

const Acceuil = () => {
  return (
    <div className="acceuil">
      <section className="acceuil__header">
        <div className="acceuil__title">
          <h1>Grow your knowlgde online together . </h1>
          <p className="acceuil__title--para">
            Buy digital products, physical products and services all from one
            simple platform.
          </p>
        </div>
        <div className="acceuil__photo">
          <img src={photo} alt="photos" className="acceuil__photo-1" />
        </div>
      </section>
      <section className="acceuil__section">
        <h1 className="books_title">Most Popular Books</h1>
        <div className="books__container">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </section>

      <section className="acceuil__section">
        <h1 className="books_title">Peaple's rating about us</h1>
        <div className="rates__container">
          <Rate />
          <Rate />
          <Rate />
          <Rate />
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
