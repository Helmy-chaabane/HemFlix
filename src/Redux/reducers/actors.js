import { createSlice } from "@reduxjs/toolkit";
import tom_img from "../../Images/tom_cruise.jpg";
import collateral_vd from "../../Videos/collateral_vd.mp4";

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
  ],
  reducers: {},
});

//export const {} = slice.actions;
export default slice.reducer;
