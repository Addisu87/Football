import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/api";

const initialState = {
  items: [],
  loading: false,
  error: null,
  status: "idle",
};

// find players transfer
export const getTransfers = createAsyncThunk(
  "transfers/getTransfers",
  async (playerId) => await getData(`/transfers/${playerId}`)
);

export const transfersSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {},

  // extraReducers to listen fetch transfers additional actions
  extraReducers: (builder) => {
    builder
      .addCase(getTransfers.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getTransfers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(getTransfers.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTransferPlayers = (state) => state.transfers.items;

export const selectTransfersById = (state, id) =>
  state.transfers.items.filter((trans) => trans?.id === id);

export default transfersSlice.reducer;
