import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "form",
  initialState: {
    user: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      confirm_password: "",
    },
    errors: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      confirm_password: "",
    },
    Submiting: false,
  },
  reducers: {
    SET_FORM: (form, action) => {
      const { champ, value } = action.payload;
      form.user[champ] = value;
      form.errors[champ] = "";
      form.Submiting = false;
    },

    SET_ERROS: (form, action) => {
      const { champ, value } = action.payload;
      form.errors[champ] = value;
      form.Submiting = false;
    },

    FORM_SUBMITTING: (form, action) => {
      form.Submiting = !form.Submiting;
    },
    INITIAL_FORM: (form, action) => {
      form.user.username = "";
      form.user.fullname = "";
      form.user.password = "";
      form.user.email = "";
      form.user.confirm_password = "";
      form.errors = {};
      form.Submiting = false;
    },
  },
});

export const {
  SET_FORM,
  FORM_SUBMITTING,
  INITIAL_FORM,
  SET_ERROS,
} = slice.actions;
export default slice.reducer;
