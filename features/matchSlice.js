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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newMatch = [...state.items];

      if (index >= 0) {
        newMatch.splice(index, 1);
      } else {
        console.log(
          `Can not remove match (id: ${action.payload.id}) as it is not in fixture!`
        );
      }

      state.items = newMatch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMatch, removeMatch } = matchSlice.actions;

export const selectMatchItems = (state) => state.match.items;

export const selectMatchById = (state, id) =>
  state.match.items.filter((game) => game.id === id);

export default matchSlice.reducer;
