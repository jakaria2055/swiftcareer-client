import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    alljobs: [],
    singleJob: null,
  },
  reducers: {
    settAllJobs: (state, action) => {
      state.alljobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});

export const { settAllJobs, setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
export const jobReducer = jobSlice.reducer;
