import {Categories} from '@/Definitions/Category.definitions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CategoriesState = {
  categoriesListRequest: boolean;
  categoriesListSuccess: Categories;
  categoriesListFailure: boolean;
};

// initial State
const initialState: CategoriesState = {
  categoriesListRequest: false,
  categoriesListSuccess: null,
  categoriesListFailure: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesListRequest: (state) => {
      state.categoriesListRequest = true;
      state.categoriesListFailure = false;
    },
    categoriesListSuccess: (state, action: PayloadAction<Categories>) => {
      state.categoriesListRequest = false;
      state.categoriesListSuccess = action.payload;
    },
    categoriesListFailure: (state) => {
      state.categoriesListRequest = false;
      state.categoriesListSuccess = [];
      state.categoriesListFailure = true;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
