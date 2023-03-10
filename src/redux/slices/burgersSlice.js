import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBurgersData = createAsyncThunk(
  "burgers/fetchData",
  async (params) => {
    const { currentPage, categoryId, sortType } = params;
    const res = await axios.get(
      `http://localhost:3001/burgers?_page=${currentPage}&_limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&_sort=${sortType}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgersData.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchBurgersData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchBurgersData.rejected, (state) => {
        state.status = "error";
        state.items = [];
      })
      .addDefaultCase(() => {});
  },
});

export default burgersSlice.reducer;

export const { setItems } = burgersSlice.actions;
