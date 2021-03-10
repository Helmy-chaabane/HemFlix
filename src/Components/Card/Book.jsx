import React from "react";
import { Link } from "react-router-dom";
import cover from "../../Images/cover.jpg";
import "./card.css";

const Book = () => {
  return (
    <Link to="/" className="book">
      <img src={cover} alt="book" className="book__cover" />
    </Link>
  );
};

export default Book;
