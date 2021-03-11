import React from "react";
import Book from "../../Components/Card/Book";
import Rate from "../../Components/Card/Rate";
import photo from "../../Images/acceuilphoto.JPG";
import "./acceuil.css";

const Acceuil = () => {
  return (
    <div className="acceuil">
      <section className="acceuil__header">
        <div className="acceuil__title fade-left">
          <h1>Grow your knowlgde online together . </h1>
          <p className="acceuil__title--para">
            Buy digital products, physical products and services all from one
            simple platform.
          </p>
        </div>
        <div className="acceuil__photo fade-right">
          <img src={photo} alt="photos" className="acceuil__photo-1" />
        </div>
      </section>
      <section className="acceuil__section">
        <h1 className="section_title">Most Popular Books</h1>
        <div className="cards__container">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </section>

      <section className="acceuil__section">
        <h1 className="section_title">Peaple's rating about us</h1>
        <div className="cards__container">
          <Rate />
          <Rate />
          <Rate />
        </div>
      </section>

      <section className="acceuil__footer">
        <div className="footer__content">
          <h2>Start growing your knowlgde with us</h2>
          <p>
            Try <span className="section_title"> Libraria </span> for free today
            and explore all the books you need and scale your online business
            from one simple place.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
