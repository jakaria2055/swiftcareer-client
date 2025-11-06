// import { configureStore } from "@reduxjs/toolkit";
// import { authSliceReducer } from "./authSlice";
// import jobSlice, { jobReducer } from "./jobSlice"
// import companyReducer from "./companySlice";


// const store = configureStore({
//   reducer: {
//     auth: authSliceReducer,
//     job: jobSlice,
//     jobs: jobReducer,
//     company: companyReducer,
//   },
// });

// export default store;


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web

import { authSliceReducer } from "./authSlice";
import jobSlice, { jobReducer } from "./jobSlice";
import companyReducer from "./companySlice";

// 1️⃣ Configure persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "company"], // only persist auth and company slices
};

// 2️⃣ Combine reducers
const rootReducer = combineReducers({
  auth: authSliceReducer,
  job: jobSlice,
  jobs: jobReducer,
  company: companyReducer,
});

// 3️⃣ Wrap combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

// 5️⃣ Create persistor
export const persistor = persistStore(store);

export default store;

