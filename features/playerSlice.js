import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData, instance } from "../api/API";

const initialState = {
  items: [],
  loading: false,
  status: "idle",
  error: null,
};

// Fetching standings from API
// export const fetchPlayers = createAsyncThunk(
//   "players/fetchPlayers",
//   async (teamId) =>
//     getData(`/players/squads`, {
//       league: "39",
//       season: "2022",
//       team: teamId,
//     })
// );

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async (teamId) => {
    try {
      const { data } = await instance.get(`/players/squads`, {
        params: {
          league: "39",
          season: "2022",
          team: teamId,
        },
      });
      return data?.response[0].players;
    } catch (error) {
      console.error("error", error);
    }
  }
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

export const selectPlayerItems = (state) => state.players.items;

export const selectPlayerById = (state, id) =>
  state.players.items?.filter((player) => player?.id === id);

export default playerSlice.reducer;
