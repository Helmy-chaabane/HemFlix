import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    REQUEST_BUGS_START: (bugs, action) => {
      bugs.loading = true;
    },
    REQUEST_BUGS_FAIL: (bugs, action) => {
      bugs.loading = false;
    },

    SET_BUGS: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    ADD_BUG: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    RESOLVE_BUG: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    ASSIGNE_BUG_TO_USER: (bugs, action) => {
      const index = bugs.list.findIndex(
        (bug) => bug.id === action.payload.bugId
      );
      bugs.list[index].userId = action.payload.userId;
    },
  },
});

export const {
  SET_BUGS,
  ADD_BUG,
  RESOLVE_BUG,
  ASSIGNE_BUG_TO_USER,
  REQUEST_BUGS_START,
  REQUEST_BUGS_FAIL,
} = slice.actions;
export default slice.reducer;
