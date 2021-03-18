import React from "react";
import { Link } from "react-router-dom";
import actor from "../../Images/tom_cruise.jpg";

const Actor = () => {
  return (
    <section className="actor fade-left">
      <img src={actor} alt="actor_photo" className="actor__img" />
      <div className="actor__container">
        <h6 className="actor__name">Tom Cruise</h6>
        <p className="actor__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          nostrum praesentium sint incidunt fugit, omnis veniam odit corporis
          qui, necessitatibus suscipit delectus libero voluptates provident
          voluptatem dolore hic soluta ab!
        </p>
        <div className="actor__movies">
          <h6>Check</h6>
          <ul className="actor__movies--list">
            <li className="actor__movies--item">
              <Link to="/movie" className="actor__movies--link">
                Collatral
              </Link>
            </li>
            <li className="actor__movies--item">
              <Link to="/movie" className="actor__movies--link">
                Collatral
              </Link>
            </li>
            <li className="actor__movies--item">
              <Link to="/movie" className="actor__movies--link">
                Collatral
              </Link>
            </li>
            <li className="actor__movies--item">
              <Link to="/movie" className="actor__movies--link">
                Collatral
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Actor;
