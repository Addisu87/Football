import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTrophies = createAsyncThunk(
  "trophies/fetchTrophies",
  async (playerId) =>
    getData(`/trophies`, { league: "39", season: "2022", player: playerId })
);

export const trophiesSlice = createSlice({
  name: "trophies",
  initialState,
  reducers: {},

  // extraReducers to listen fetch trophies additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchTrophies.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTrophies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        // Add any fetched trophies to the array
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchTrophies.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTrophiesItems = (state) => state.trophies.items;

export const selectTrophiesById = (state, id) =>
  state.trophies.items.filter((item) => item.id === id);

export default trophiesSlice.reducer;
