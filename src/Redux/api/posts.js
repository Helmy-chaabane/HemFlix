import axios from "axios";
import { ADD_POSTS } from "../reducers/posts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => async (dispatch, getState) => {
  console.log(getState());
  return axios
    .get("/posts")
    .then((response) => {
      dispatch(ADD_POSTS({ posts: response.data }));
    })
    .catch((reason) => {
      console.log(reason.message);
    });
};
