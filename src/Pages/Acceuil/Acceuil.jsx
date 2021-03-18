import React, { useState } from "react";
import Movies from "../../Components/Movies/Movies";
import "./acceuil.scss";

const Acceuil = () => {
  const [selectedCat, setSelectedCat] = useState("horror");

  const changeCat = (cat) => {
    setSelectedCat(cat);
  };

  return (
    <div className="acceuil">
      <section className="acceuil__header">
        <div className="acceuil__header--container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h6>Watch anywhere. Cancel anytime.</h6>
        </div>
      </section>

      <section className="acceuil__movies">
        <div className="acceuil__movies--intro">
          <h2>Here's our finest Movies</h2>
        </div>
        <div className="acceuil__movies--container">
          <div className="acceuil__movies--categories">
            <ul className="acceuil__movies--items">
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "horror" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("horror")}
              >
                Horror
              </li>
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "comedy" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("comedy")}
              >
                Comedy
              </li>
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "animation" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("animation")}
              >
                Animation
              </li>
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "fantasy" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("fantasy")}
              >
                Fantasy
              </li>
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "romantic" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("romantic")}
              >
                Romantic
              </li>
              <li
                className={`acceuil__movies--items--item ${
                  selectedCat === "action" &&
                  "acceuil__movies--items--item--active"
                }`}
                onClick={() => changeCat("action")}
              >
                Action
              </li>
            </ul>
          </div>
          <div className="acceuil__movies--lists">
            <Movies />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
