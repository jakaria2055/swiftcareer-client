import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";
import jobSlice, { jobReducer } from "./jobSlice"


const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    job: jobSlice,
    jobs: jobReducer,
  },
});

export default store;
