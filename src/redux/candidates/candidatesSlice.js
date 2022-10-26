import { createSlice } from "@reduxjs/toolkit";

import { defaultData } from "../../data/defaultData";

export const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    candidates: defaultData,
  },
  reducers: {
    setCandidates: (state, action) => {
      state.candidates = action.payload;
    },
  },
});

export const { setCandidates } = candidatesSlice.actions;
export const getCandidates = (state) => state.candidates;

export default candidatesSlice.reducer;
