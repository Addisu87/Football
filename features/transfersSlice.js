import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTransfers = createAsyncThunk(
  "transfers/fetchTransfers",
  async (playerId) =>
    getData(`/transfers?player=${playerId}`, { league: "39", season: "2022" })
);

export const transfersSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {},

  // extraReducers to listen fetch transfers additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchTransfers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransfers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action?.payload];
      })
      .addCase(fetchTransfers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTransfersItems = (state) => state.transfers.items;

export const selectTransfersById = (state, id) =>
  state.transfers.items.filter((trans) => trans?.id === id);

export default transfersSlice.reducer;
