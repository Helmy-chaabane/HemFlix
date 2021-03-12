import React from "react";
import OrderCard from "../../Components/Card/OrderCard";
import "./order.css";

const Order = () => {
  return (
    <div className="oder__bg">
      <section className="order__intro">
        <h1>My orders</h1>
      </section>

      <section className="order__container">
        <div className="order__list">
          <h5> My cuurent Orders </h5>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className="order__demande">
          <h5> Make a new Order here </h5>
        </div>
      </section>
    </div>
  );
};

export default Order;
