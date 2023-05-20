import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async (teamId) =>
  getData(`/teams`, { league: "39", season: "2022", team: teamId })
);

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},

  // extraReducers to listen fetch teams additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        // Add any fetched teams to the array
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTeamItems = (state) => state.teams.items;

export const selectTeamById = (state, teamId) =>
  state.teams.items.filter((item) => item?.id === teamId);

export default teamSlice.reducer;
