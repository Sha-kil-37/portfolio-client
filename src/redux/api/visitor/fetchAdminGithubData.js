//
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// base url
const API_URL = "https://portfolio-server-t7c3.onrender.com/portfolio/api/v1/visitor/get-github";

// Thunk: Fetch Data
export const fetchAdminGithubData = createAsyncThunk(
  "fetchAdminGithubData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      // Handle server downtime or other errors
      return rejectWithValue({
        message: "Server is down. Please try again later.",
      });
    }
  }
);