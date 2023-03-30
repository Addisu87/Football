import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeTeam: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTeam, removeTeam } = teamSlice.actions;

export default teamSlice.reducer;
