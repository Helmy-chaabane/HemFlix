import React from "react";
import { Link } from "react-router-dom";
import cover from "../../Images/cover.jpg";
import "./card.css";

const Book = () => {
  return (
    <Link to="/book" className="book__card">
      <img src={cover} alt="book" className="book__cover" />
    </Link>
  );
};

export default Book;
