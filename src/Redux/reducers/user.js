import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    Submiting: false,
    loggedIn: false,
  },
  reducers: {
    SET_USER: (user, action) => {
      const { champ, value } = action.payload;
      console.log(champ);
      user[champ] = value;
      user[`${champ}Error`] = "";
      user.Submiting = false;
    },

    USER_SUBMITTING: (user, action) => {
      user.Submiting = !user.Submiting;
    },
    INITIAL_USER: (user, action) => {
      user.username = "";
      user.password = "";
      user.usernameError = "";
      user.passwordError = "";
      user.Submiting = false;
    },

    USER_LOG: (user, action) => {
      user.loggedIn = !user.loggedIn;
    },
  },
});

export const {
  SET_USER,
  USER_SUBMITTING,
  INITIAL_USER,
  USER_LOG,
} = slice.actions;
export default slice.reducer;
