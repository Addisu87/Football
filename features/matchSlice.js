import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchMatch = createAsyncThunk("match/fetchMatch", async () =>
  getData(`/fixtures`, {
    league: "39",
    season: "2022",
    from: "2023-04-23",
    to: "2023-06-23",
  })
);

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {},
  // extraReducers to listen fetch match additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchMatch.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchMatch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        // Add any fetched match to the array
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchMatch.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectMatchItems = (state) => state.match.items;

export const selectMatchById = (state, id) =>
  state.match.items.filter((game) => game.id === id);

export default matchSlice.reducer;
