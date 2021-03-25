import { createSelector } from "reselect";

export const getForm = createSelector(
  (state) => state.form,
  (form) => form
);
