import { configureStore } from "@reduxjs/toolkit";
import candidatesSlice from "./candidates/candidatesSlice";

export default configureStore({
  reducer: { candidatesList: candidatesSlice },
});
