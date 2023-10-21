import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "../slices/matchSlice";
import standingReducer from "../slices/standingSlice";
import teamReducer from "../slices/teamSlice";
import playersReducer from "../slices/playerSlice";
import transfersReducer from "../slices/transfersSlice";
import lineupReducer from "../slices/lineupSlice";
import trophiesReducer from "../slices/trophiesSlice";

export default configureStore({
  reducer: {
    teams: teamReducer,
    match: matchReducer,
    standings: standingReducer,
    players: playersReducer,
    transfers: transfersReducer,
    lineup: lineupReducer,
    trophies: trophiesReducer,
  },
});
