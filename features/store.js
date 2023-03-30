import { configureStore } from "@reduxjs/toolkit";
import standingReducer from "./standingSlice";
import teamReducer from "./teamSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
    standing: standingReducer,
  },
});
