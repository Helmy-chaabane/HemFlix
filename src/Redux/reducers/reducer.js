import { combineReducers } from "redux";
import moviesReducer from "./movies";
import navReducer from "./navbar";
import userReducer from "./user";
import notificationReducer from "./notifications";
import actorsReducer from "./actors";

export default combineReducers({
  data: moviesReducer,
  nav: navReducer,
  user: userReducer,
  notifis: notificationReducer,
  actors: actorsReducer,
});
