import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "state",
  initialState: {
    list: [],
    name: "",
    age: "",
    number: "",
  },
  reducers: {
    ADD_POSTS: (state, action) => {
      state.list.push(action.payload.posts);
      state.name = "faf";
    },
  },
});

export const { ADD_POSTS } = slice.actions;
export default slice.reducer;
