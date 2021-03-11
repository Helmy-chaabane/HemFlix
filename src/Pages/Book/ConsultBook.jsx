import React from "react";
import { Link } from "react-router-dom";
import cover from "../../Images/cover.jpg";
import "./book.css";

const CondultBook = () => {
  return (
    <div className="book__bg">
      <section className="book__intro">
        <h1 className>Learn more about this book</h1>
      </section>

      <div className="book__description">
        <div className="book__image popup__infinite">
          <img src={cover} alt="cover" className="book__image--1" />
        </div>
        <div className="book__details">
          <h1>The Book title</h1>
          <div className="book__details--section">
            <span>Author Name :</span>
            <p className="book__info">Hajer</p>
          </div>
          <div className="book__details--section">
            <span>Genre:</span>
            <p className="book__info">Mta3 romansiya w fazet</p>
          </div>
          <div className="book__details--section">
            <span>Publisher :</span>
            <p className="book__info">Hajer linachr wa tibé3a</p>
          </div>
          <div className="book__details--section">
            <span>Number of pages :</span>
            <p className="book__info">10.5</p>
          </div>
          <div className="book__details--section">
            <span>Price :</span>
            <p className="book__info">30.5$</p>
          </div>
          <div className="book__details--description">
            <span>Description :</span>
            <p className="book__info">
              9alek fama wa7da ta7ét fi 7ofra fil ma9ni ba7dha baladiyét sidi
              7san, 3ad hiya t3ayit bélik chkoun yasma3ha, jéha 3asés lbaladéya
              fibélou 7ouréya mta3 éméni mché yijiri 7at dinar w 9al ya rabi
              jibli 8zéla. lamra sim3itou yéd3i 3aytit 9alit la8zéla fil 7ofra
              tistana fik , rajél tal fi 7ofra l9a martou 8adi XD,3mal ro7ou
              masma3ch w tayech 100 frank w 9al ya rabi héka dinar yarja3
            </p>
          </div>
          <Link to="/" className="book__btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CondultBook;
