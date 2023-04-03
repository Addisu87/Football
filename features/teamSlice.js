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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newTeam = [...state.items];

      if (index >= 0) {
        newTeam.splice(index, 1);
      } else {
        console.log(
          `Can not remove Team (id: ${action.payload.id}) as it is not in fixture!`
        );
      }

      state.items = newTeam;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTeam, removeTeam } = teamSlice.actions;

export const selectTeamItems = (state) => state.team.items;

export const selectTeamById = (state, id) =>
  state.team.items.filter((item) => item.id === id);

export default teamSlice.reducer;
