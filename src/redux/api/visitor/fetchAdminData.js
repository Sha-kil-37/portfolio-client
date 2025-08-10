//
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// base url
const API_URL = "https://server-1ejj.onrender.com/portfolio/api/v1/visitor/get-admin";

// Thunk: Fetch Data
export const fetchAdminData = createAsyncThunk(
  "fetchAdminData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data;
    } catch (error) {
      // Handle server downtime or other errors
      return rejectWithValue({
        message: "Server is down. Please try again later.",
      });
    }
  }
);
