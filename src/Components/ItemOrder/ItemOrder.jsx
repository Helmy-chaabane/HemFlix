import React from "react";
import cover from "../../Images/cover.jpg";
import "./itemorder.css";
const ItemOrder = () => {
  return (
    <div className="order__item">
      <img src={cover} alt="item" className="order__item--photo" />
      <h2 className="order__item--name">Book Title is here</h2>
    </div>
  );
};

export default ItemOrder;
