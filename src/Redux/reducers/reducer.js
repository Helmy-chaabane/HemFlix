import { combineReducers } from "redux";
import moviesReducer from "./movies";
import navReducer from "./navbar";
import userReducer from "./user";
import notificationReducer from "./notifications";
import actorsReducer from "./actors";
import formReducer from "./form";
import postReducer from "./posts";

export default combineReducers({
  data: moviesReducer,
  nav: navReducer,
  user: userReducer,
  notifis: notificationReducer,
  actors: actorsReducer,
  form: formReducer,
  posts: postReducer,
});
