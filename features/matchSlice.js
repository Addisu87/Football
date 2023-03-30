import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    addMatch: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeMatch: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMatch, removeMatch } = matchSlice.actions;

export const selectMatchItems = (state) => state.match.items;

export default matchSlice.reducer;
