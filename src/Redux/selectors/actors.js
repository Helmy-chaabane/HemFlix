import { createSelector } from "reselect";

export const getActor = (actorId) =>
  createSelector(
    (state) => state.actors,
    (actors) => actors.filter((actor) => actor.id === actorId)
  );

export const getAllActors = createSelector(
  (state) => state.actors,
  (actors) => actors
);
