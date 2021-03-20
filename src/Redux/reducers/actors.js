import { createSlice } from "@reduxjs/toolkit";
import tom_img from "../../Images/tom_cruise.jpg";
import leo_img from "../../Images/leonardo_dicaprio.jpg";
import collateral_vd from "../../Videos/collateral_vd.mp4";
import titanic_vd from "../../Videos/titanic_vd.mp4";

const slice = createSlice({
  name: "actors",
  initialState: [
    {
      id: 1,
      name: "Tom Cruise",
      movieId: 1,
      image: tom_img,
      trailer: collateral_vd,
      description:
        "Thomas Cruise Mapother IV (born July 3, 1962) is an American actor and producer. He has received various accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards.",
    },
    {
      id: 2,
      name: "Leonardo Dicaprio",
      movieId: 2,
      image: leo_img,
      trailer: titanic_vd,
      description:
        " is an American actor, film producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed $7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors.",
    },
  ],
  reducers: {},
});

//export const {} = slice.actions;
export default slice.reducer;
