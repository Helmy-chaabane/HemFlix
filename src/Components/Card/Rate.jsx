import React from "react";
import user from "../../Images/user.png";
import "./card.css";
const Rate = () => {
  return (
    <div className="rate">
      <div className="user__des">
        <img src={user} alt="user" className="user__photo" />
        <h3>Me</h3>
      </div>
      <p className="rate__para">
        I use LIBRARIA to process payments for products like ebooks and
        templates. It’s allowed me to build a passive .
      </p>
    </div>
  );
};

export default Rate;
