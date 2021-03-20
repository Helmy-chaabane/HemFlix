import { createSelector } from "reselect";

export const getUser = createSelector(
  (state) => state.user,
  (user) => user
);

export const getUserLog = createSelector(
  (state) => state.user,
  (user) => user.loggedIn
);
