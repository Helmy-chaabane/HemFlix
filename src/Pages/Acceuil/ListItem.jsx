import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_GENRE } from "../../Redux/reducers/movies";

const ListItem = ({ currentGenre, genre }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={`acceuil__movies--items--item ${
        currentGenre === genre && "acceuil__movies--items--item--active"
      }`}
      onClick={() => dispatch(CHANGE_GENRE({ genre }))}
    >
      {genre}
    </li>
  );
};

export default ListItem;
