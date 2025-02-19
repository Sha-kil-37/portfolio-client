// configureStore.js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import adminDataSlice from "../slices/adminDataSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from 'redux-thunk';
//
const persistConfig = {
  key: "root",
  storage,
  whitelist: [adminDataSlice], // Specify which slices should be persisted
};

const rootReducer = combineReducers({
  adminDataReducer: adminDataSlice, // Register the reducer
});

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

export { store, persistor };
