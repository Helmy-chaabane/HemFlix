import React from "react";
import cover from "../../Images/cover.jpg";
import TrashSVG from "../../SVG/TrashSVG";

const OderCard = () => {
  return (
    <div className="order__card">
      <img src={cover} alt="photo__order" className="order__image" />
      <div className="order__details">
        <div className="order__start">
          <TrashSVG className="order__icon" />
          <h2>Book Title is here</h2>
        </div>
        <div className="order__content">
          <p className="order__content--para">Description about the Book</p>
        </div>
        <div className="order__bottom">
          <h4>250 $</h4>
          <h6>20/05/21</h6>
        </div>
      </div>
    </div>
  );
};

export default OderCard;
