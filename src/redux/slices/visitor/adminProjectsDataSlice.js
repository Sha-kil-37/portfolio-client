
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminProjectsData } from "../../api/visitor/fetchAdminProjectsData";
//
const adminProjectsDataSlice = createSlice({
  name: "adminProjectsDataSlice",
  initialState: {
    projects: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProjectsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProjectsData.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchAdminProjectsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Set the error message
      });
  },
});

export default adminProjectsDataSlice.reducer;