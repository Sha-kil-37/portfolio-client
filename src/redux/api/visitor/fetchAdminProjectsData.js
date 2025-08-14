//
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// base url
const API_URL = "http://localhost:8000/portfolio/api/v1/visitor/get-projects";

// Thunk: Fetch Data
export const fetchAdminProjectsData = createAsyncThunk(
  "fetchAdminProjectsData",
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
