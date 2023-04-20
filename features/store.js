import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./matchSlice";
import standingReducer from "./standingSlice";
import teamReducer from "./teamSlice";

export default configureStore({
  reducer: {
    teams: teamReducer,
    match: matchReducer,
    standings: standingReducer,
  },
});
