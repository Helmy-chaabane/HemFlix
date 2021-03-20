import { createSelector } from "reselect";

export const getNotifications = createSelector(
  (state) => state.notifis.notifications,
  (notifications) => notifications
);
