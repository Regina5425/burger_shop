import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type BurgersType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface BurgerSliceState {
  items: BurgersType[];
  status: Status;
}

type FetchBurgersArgsType = {
	currentPage: number;
	categoryId: number;
	sortType: string;
}

export const fetchBurgersData = createAsyncThunk<
  BurgersType[],
  FetchBurgersArgsType
>("burgers/fetchData", async (params) => {
  const { currentPage, categoryId, sortType } = params;
  const { data } = await axios.get<BurgersType[]>(
    `http://localhost:3001/burgers?_page=${currentPage}&_limit=4&${
      categoryId > 0 ? `category=${categoryId}` : ``
    }&_sort=${sortType}`
  );
  return data;
});

const initialState: BurgerSliceState = {
  items: [],
  status: Status.LOADING,
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgersData.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchBurgersData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchBurgersData.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
      .addDefaultCase(() => {});
  },
});

export default burgersSlice.reducer;
