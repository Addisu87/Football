import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const standingSlice = createSlice({
  name: "standing",
  initialState,
  reducers: {
    addStanding: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeStanding: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStanding, removeStanding } = standingSlice.actions;

export default standingSlice.reducer;
