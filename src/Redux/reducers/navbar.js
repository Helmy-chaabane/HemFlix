import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "nav",
  initialState: {
    scroll: false,
  },
  reducers: {
    CHANGE_NAV_BACKGROUNDCOLOR: (nav, action) => {
      nav.scroll = action.payload.bool;
    },
  },
});

export const { CHANGE_NAV_BACKGROUNDCOLOR } = slice.actions;
export default slice.reducer;
