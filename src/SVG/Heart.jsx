import React from "react";
import { useDispatch } from "react-redux";
import { LIKING_MOVIE } from "../Redux/reducers/movies";
import { ADD_NOTIFICATION } from "../Redux/reducers/notifications";
import SmileSVG from "./SmileSVG";
import SadSVG from "./SadSVG";
const Heart = ({ classname, id, like, title }) => {
  const dispatch = useDispatch();
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
      viewBox="0 0 32 32"
      onClick={() => {
        dispatch(LIKING_MOVIE({ id }));
        dispatch(
          ADD_NOTIFICATION({
            Icon: () =>
              like ? (
                <SadSVG classname="notification__icon notification__icon--emoji" />
              ) : (
                <SmileSVG classname="notification__icon notification__icon--emoji" />
              ),
            Title: () => <h6>{title}</h6>,
            Description: () => (
              <React.Fragment>
                <p className="notification__description">
                  you {like && "dis"}liked{" "}
                  <span className="notification__special">{title}</span>
                </p>
                <p className="notification__tip">
                  {like ? "it has been removed from " : "it has been added to "}
                  your favourite movies list
                </p>
              </React.Fragment>
            ),
            duration: 3.4,
          })
        );
      }}
    >
      <title>heart</title>
      <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
    </svg>
  );
};

export default Heart;
