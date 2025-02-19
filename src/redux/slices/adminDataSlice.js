import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL = "http://localhost:8000/portfolio/v1/visitor/get-admin";

// Thunk: Fetch Data
export const fetchAdminData = createAsyncThunk("fetchAdminData", async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    return error;
  }
});

//
const AdminDataSlice = createSlice({
  name: "adminDataSlice",
  initialState: {
    adminData: {},
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      builder
        // Handle Fetch Data
        .addCase(fetchAdminData.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAdminData.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.items = action.payload;
        })
        .addCase(fetchAdminData.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        // Handle Add Data
        .addCase(fetchAdminData.fulfilled, (state, action) => {
          state.items.push(action.payload);
        });
    },
  },
});
//
export default AdminDataSlice.reducer;
