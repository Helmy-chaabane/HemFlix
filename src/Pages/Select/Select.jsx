import "./select.scss";

import React, { useState } from "react";
import RightArrow from "../../SVG/RightArrow";

const Select = () => {
  const [state, setState] = useState("Choose from the Menu");

  return (
    <div className="container">
      <div className="select">
        <span className="select__selected">{state}</span>
        <RightArrow classname="select__icon" />
        <ul className="select__list">
          <li className="select__option" onClick={() => setState("Option1")}>
            Option1
          </li>
          <li className="select__option" onClick={() => setState("Option2")}>
            Option2
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
