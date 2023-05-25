import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "./services/api";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchLineups = createAsyncThunk(
  "lineups/fetchLineups",
  async (fixtureId) =>
    getData(`/lineups`, { league: "39", season: "2022", fixture: fixtureId })
);

export const lineupSlice = createSlice({
  name: "lineups",
  initialState,
  reducers: {},

  // extraReducers to listen fetch lineups additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchLineups.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLineups.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchLineups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectLineupItems = (state) => state.lineups?.items;

export const selectLineupById = (state, id) =>
  state.lineups.items.filter((lineup) => lineup?.id === id);

export default lineupSlice.reducer;
