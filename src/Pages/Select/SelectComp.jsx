import "./select.scss";
import React, { useEffect, useState } from "react";
import Chav from "../../SVG/chavSVG";
import Heart from "../../SVG/Heart";

const SelectC = ({ options, handleSelect, defaultValue }) => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      const ind = options.findIndex(
        (op) => JSON.stringify(op.value) === JSON.stringify(defaultValue)
      );
      setIndex(ind !== -1 ? ind : null);
      handleSelect(options[ind].value);
    }
  }, [defaultValue, handleSelect, options]);

  return (
    <div className="select__wrapper">
      <label className="select" htmlFor="select">
        <input
          type="checkbox"
          id="select"
          name="select"
          className="select__field"
        />
        <span className="select__text">
          {index !== null ? options[index].option : "Choose from the Menu"}
        </span>
        <Chav className="select__chav" />
        <menu className="select__menu">
          {options.map((op, ind) => (
            <div
              className={`select__item ${
                index === ind && "select__item__seleted"
              }`}
              key={ind}
              onClick={() => {
                setIndex(ind);
                handleSelect(op.value);
              }}
            >
              <Heart classname="select__heart" />
              <span>{op.option}</span>
            </div>
          ))}
        </menu>
      </label>
    </div>
  );
};

export default SelectC;
