import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

// eslint-disable-next-line
export default () =>
  configureStore({
    reducer,
  });
