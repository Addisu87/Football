import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  status: "idle",
  error: null,
};

const teamId = 33;
// Fetching standings from API
export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => await getData(`/players/squads?team=${teamId} `)
);

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},

  // extraReducers to listen fetch players additional actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectPlayerLists = (state) => state.players.items;

export const selectPlayerById = (state, playerId) =>
  state.players.items?.filter((player) => player?.id === playerId);

export default playerSlice.reducer;
