import { configureStore } from "@reduxjs/toolkit";
import standingReducer from "./standingSlice";

export default configureStore({
  reducer: {
    standing: standingReducer,
  },
});
