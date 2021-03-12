import React, { useState } from "react";
import OrderCard from "../../Components/Card/OrderCard";
import ItemOrder from "../../Components/ItemOrder/ItemOrder";
import InputLogin from "../../Components/Inputs/InputLogin";
import cover from "../../Images/cover.jpg";
import "./order.css";
import { Link } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState({
    numberOfCopies: 0,
    address: "",
    book: null,
  });
  const changeInput = (champ, value) => {
    setOrder({ ...order, [champ]: value });
  };

  return (
    <div className="oder__bg">
      <section className="order__intro">
        <h1>My orders</h1>
      </section>

      <section className="order__container">
        <div className="order__list">
          <h5 className="section_title margin-bt"> My current Orders </h5>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className="order__demande">
          <h5 className="section_title"> Make a new Order here </h5>
          <div className="order__demande--container">
            <h5>Currently on Stock (Supplies) :</h5>
            <div className="order__list--books">
              <ItemOrder />
              <ItemOrder />
              <ItemOrder />
              <ItemOrder />
              <ItemOrder />
            </div>

            <div className="order__chosen--container">
              <div className="order__chosen--image">
                <img
                  src={cover}
                  alt="chosen"
                  className="order__chosen--photo"
                />
                <h6>Pick a new book</h6>
              </div>
              <div className="order__chosen--details">
                <div className="order__copies">
                  <InputLogin
                    type="number"
                    placeholder="Number of Copies"
                    changeInput={changeInput}
                    value={order.numberOfCopies}
                  />
                </div>
                <div className="order__address">
                  <InputLogin
                    type="text"
                    placeholder="Your address"
                    changeInput={changeInput}
                    value={order.address}
                  />
                </div>
                <Link to="/myOrders" className="book__btn">
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
