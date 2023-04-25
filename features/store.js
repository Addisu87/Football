import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./matchSlice";
import standingReducer from "./standingSlice";
import teamReducer from "./teamSlice";
import playersReducer from "./playerSlice";
import transfersReducer from "./transfersSlice";

export default configureStore({
  reducer: {
    teams: teamReducer,
    match: matchReducer,
    standings: standingReducer,
    players: playersReducer,
    transfers: transfersReducer,
  },
});
