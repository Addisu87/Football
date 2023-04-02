import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./Slices/matchSlice";
import standingReducer from "./Slices/standingSlice";
import teamReducer from "./Slices/teamSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
    match: matchReducer,
    standing: standingReducer,
  },
});
