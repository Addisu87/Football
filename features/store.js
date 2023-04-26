import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./matchSlice";
import standingReducer from "./standingSlice";
import teamReducer from "./teamSlice";
import playersReducer from "./playerSlice";
import transfersReducer from "./transfersSlice";
import lineupReducer from "./lineupSlice";

export default configureStore({
  reducer: {
    teams: teamReducer,
    match: matchReducer,
    standings: standingReducer,
    players: playersReducer,
    transfers: transfersReducer,
    lineup: lineupReducer,
  },
});
