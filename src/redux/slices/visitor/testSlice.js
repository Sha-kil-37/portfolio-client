import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: null,
  loading: "idle",
  error: null,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
//   extraReducers: (builder) => {
//     builder.addCase(fetchTest.pending, (state) => {});
//   },
});
export default testSlice.reducer;
