import { createSlice } from "@reduxjs/toolkit";
import { fetchFooterData } from "../api/visitor/fetchFooterData.js";
//
const footerDataSlice = createSlice({
  name: "footerData",
  initialState: {
    footer: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.loading = false;
        state.footer = action.payload;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Set the error message
      });
  },
});

export default footerDataSlice.reducer;