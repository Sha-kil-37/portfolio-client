// configureStore.js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import adminDataSlice from "../slices/visitor/adminDataSlice";
import { configureStore } from "@reduxjs/toolkit";
import footerDataSlice from "../slices/visitor/footerDataSlice";
import adminGithubDataSlice from "../slices/visitor/adminGithubDataSlice";
import adminProjectsDataSlice from "../slices/visitor/adminProjectsDataSlice"; // Import the new slice
//
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    adminDataSlice,
    footerDataSlice,
    adminGithubDataSlice,
    adminProjectsDataSlice,
  ], // Specify which slices should be persisted
};

const rootReducer = combineReducers({
  adminDataReducer: adminDataSlice, // Register the reducer
  adminGithubDataReducer: adminGithubDataSlice,
  footerReducer: footerDataSlice,
  adminProjectsDataReducer: adminProjectsDataSlice,
});
//
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
const store = configureStore({
  reducer: persistedReducer,
  // middleware: () => {
  //   return;
  // }, // Add thunk middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the check
    }),
});

const persistor = persistStore(store);
//
export { store, persistor };
