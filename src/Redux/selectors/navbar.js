import { createSelector } from "reselect";

export const scrollingBoolean = createSelector(
  (state) => state.nav.scroll,
  (scroll) => scroll
);
