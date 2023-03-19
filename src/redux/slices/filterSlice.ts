import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortType = {
  name: string;
  sort: "rating" | "price" | "title";
};

interface FilterSliceState {
  categoryId: number;
  sort: SortType;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sort: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
