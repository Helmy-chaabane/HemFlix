import { useState } from "react";
import SelectC from "./SelectComp";

const options = [
  {
    option: "Item1",
    value: {
      name: "Helmy1",
      age: 20,
    },
  },
  {
    option: "Item2",
    value: {
      name: "Helmy2",
      age: 30,
    },
  },
  {
    option: "Item3",
    value: {
      name: "Helmy3",
      age: 30,
    },
  },
];

const Select = () => {
  const [choosen, setChoosen] = useState({
    name: "Helmy2",
    age: 30,
  });
  return (
    <div className="container">
      <SelectC
        options={options}
        defaultValue={choosen}
        handleSelect={setChoosen}
      />
    </div>
  );
};

export default Select;
