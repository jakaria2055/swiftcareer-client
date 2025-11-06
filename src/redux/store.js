import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";
import jobSlice, { jobReducer } from "./jobSlice"
import { companySlice } from "./companySlice";


const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    job: jobSlice,
    jobs: jobReducer,
    company: companySlice,
  },
});

export default store;
