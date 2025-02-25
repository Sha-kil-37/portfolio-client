import {  createSlice } from "@reduxjs/toolkit";
import { fetchAdminData } from "../api/visitor/fetchAdminData";


// Slice: Admin Data
const initialState = {
  data: null,
  status: "idle", // loading || success || failure
  error: null,
};
//
const AdminDataSlice = createSlice({
  name: "adminDataSlice",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder;
    // Handle Fetch Data
    builder.addCase(fetchAdminData.pending, (state, action) => {
      state.status = "loading";
      state.data = null;
      state.error = null;
      return;
    });
    builder.addCase(fetchAdminData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
      state.error = null;
      return;
    });
    builder.addCase(fetchAdminData.rejected, (state, action) => {
      state.status = "failure";  
      state.data = null;
      state.error = action.payload;
    });
  },
});
//
export default AdminDataSlice.reducer;
