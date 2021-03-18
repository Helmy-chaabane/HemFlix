import { createSelector } from "reselect";

export const getBugsSelector = createSelector(
  (state) => state.entities.bugs.list,
  (bugs) => bugs
);

export const getUnresolvedBugSelector = createSelector(
  (state) => state.entities.bugs.list,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUserSelector = (userId) =>
  createSelector(
    (state) => state.entities.bugs.list,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
