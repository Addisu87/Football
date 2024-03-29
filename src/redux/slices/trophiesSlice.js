import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/api";

const initialState = {
  items: [],
  loading: false,
  error: null,
  status: "idle",
};

export const fetchTrophies = createAsyncThunk(
  "trophies/fetchTrophies",
  async (playerId) => getData(`/trophies`, { player: playerId })
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
        state.items = action.payload;
      })
      .addCase(fetchTrophies.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTrophiesItems = (state) => state.trophies.items;

export const selectTrophiesById = (state, playerId) =>
  state.trophies.items.filter((item) => item?.id === playerId);

export default trophiesSlice.reducer;
