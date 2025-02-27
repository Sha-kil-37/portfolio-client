import { fetchAdminData } from "../api/visitor/fetchAdminData";
import { createSlice } from "@reduxjs/toolkit";
//
const AdminDataSlice = createSlice({
  name: "adminData",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Set the error message
      });
  },
});

export default AdminDataSlice.reducer;
