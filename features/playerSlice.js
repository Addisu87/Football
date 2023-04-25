import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchPlayers = createAsyncThunk("players/fetchPlayers", async () =>
  getData(`/players`, { league: "39", season: "2022" })
);

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},

  // extraReducers to listen fetch players additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        // Add any fetched players to the array
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectPlayerItems = (state) => state.players.items;

export const selectPlayerById = (state, id) =>
  state.players.items.filter((item) => item?.id === id);

export default playerSlice.reducer;
