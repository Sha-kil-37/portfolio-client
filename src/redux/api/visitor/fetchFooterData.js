//
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// base url
const API_URL = "http://localhost:8000/portfolio/api/v1/visitor/get-footer";
// Thunk: Fetch Data
export const fetchFooterData = createAsyncThunk(
  "fetchFooterData",
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
