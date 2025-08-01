import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminGithubData } from "../../api/visitor/fetchAdminGithubData.js";

//
const adminGithubDataSlice = createSlice({
  name: "adminGithubData",
  initialState: {
    github: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminGithubData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminGithubData.fulfilled, (state, action) => {
        state.loading = false;
        state.github = action.payload;
      })
      .addCase(fetchAdminGithubData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Set the error message
      });
  },
});

export default adminGithubDataSlice.reducer;
