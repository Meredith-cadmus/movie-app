import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",
};
export const MovieSlice = createSlice({
  name: "MovieoData",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});

export const { setBannerData, setImageURL } = MovieSlice.actions;

export default MovieSlice.reducer;
