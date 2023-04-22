import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/API";

const initialState = {
  items: [],
  status: "idle",
  loading: false,
  error: null,
};

export const fetchStandings = createAsyncThunk(
  "standings/fetchStandings",
  async () => {
    try {
      const { data } = await instance.get(`/standings`, {
        league: "39",
        season: "2022",
      });
      return data.response[0]?.league?.standings[0];
    } catch (error) {
      console.error("error", error);
    }
  }
);

export const standingSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {},

  // extraReducers to listen fetch standings additional actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchStandings.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchStandings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        // Add any fetched standings to the array
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchStandings.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectStandingItems = (state) => state.standings.items;

export const selectStandingsById = (state, id) =>
  state.standings.items.filter((item) => item.id === id);

export default standingSlice.reducer;
