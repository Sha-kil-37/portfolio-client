import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// base url
const API_URL = "http://localhost:8000/portfolio/api/v1/visitor/get-admin";
// Thunk: Fetch Data
export const fetchAdminData = createAsyncThunk("fetchAdminData", async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    return error;
  }
});