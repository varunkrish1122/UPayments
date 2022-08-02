import {Product} from '@/Definitions/Products.definitions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ActiveProductState = {
  activeProductRequest: boolean;
  activeProductSuccess: Product;
  activeProductFailure: boolean;
};

// initial State
const initialState: ActiveProductState = {
  activeProductRequest: false,
  activeProductSuccess: null,
  activeProductFailure: false,
};

export const activeProductSlice = createSlice({
  name: 'activeProductData',
  initialState,
  reducers: {
    activeProductRequest: (state, action: PayloadAction<string>) => {
      state.activeProductRequest = true;
      state.activeProductFailure = false;
    },
    activeProductSuccess: (state, action: PayloadAction<Product>) => {
      state.activeProductRequest = false;
      state.activeProductSuccess = action.payload;
    },
    activeProductFailure: (state) => {
      state.activeProductRequest = false;
      state.activeProductSuccess = null;
      state.activeProductFailure = true;
    },
  },
});

export const activeProductActions = activeProductSlice.actions;

export default activeProductSlice.reducer;
