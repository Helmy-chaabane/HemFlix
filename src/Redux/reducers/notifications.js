import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "notifs",
  initialState: {
    notifications: [],
    id: 0,
  },
  reducers: {
    ADD_NOTIFICATION: (notifs, action) => {
      const { Title, Description, duration, Icon } = action.payload;
      notifs.notifications.push({
        icon: Icon,
        id: ++notifs.id,
        title: Title,
        description: Description,
        duration,
      });
    },
    REMOVE_NOTIFICATOIN: (notifs, action) => {
      notifs.notifications = notifs.notifications.filter(
        (notif) => notif.id !== action.payload.id
      );
    },

    REMOVE_ALL_NOTIFICATIONS: (notifs, action) => {
      notifs.notifications = [];
    },
  },
});

export const {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATOIN,
  REMOVE_ALL_NOTIFICATIONS,
} = slice.actions;
export default slice.reducer;
