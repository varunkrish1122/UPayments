import {Product, Products} from '@/Definitions/Products.definitions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ProductsState = {
  productsListRequest: boolean;
  productsListSuccess: Products;
  productsListFailure: boolean;
  createProductRequest: boolean;
  createProductSuccess: Product | null;
  createProductFailure: boolean;
  deleteProductRequest: boolean;
  deleteProductFailure: boolean;
};

// initial State
const initialState: ProductsState = {
  productsListRequest: false,
  productsListSuccess: null,
  productsListFailure: false,
  createProductRequest: false,
  createProductSuccess: null,
  createProductFailure: false,
  deleteProductRequest: false,
  deleteProductFailure: false,
};

type ProductID = {
  productID?: string;
};

export type CreateProduct = {
  formData: Product;
  history: any;
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createProductRequest: (state, action: PayloadAction<CreateProduct>) => {
      state.createProductRequest = true;
      state.createProductFailure = false;
    },
    createProductSuccess: (state, action: PayloadAction<Product>) => {
      state.createProductRequest = false;
      state.createProductSuccess = action.payload;
      if (action.payload) {
        state.productsListSuccess = [
          {
            ...action.payload,
          },
          ...(state.productsListSuccess || []),
        ];
      }
    },
    createProductFailure: (state) => {
      state.createProductRequest = false;
      state.createProductSuccess = null;
      state.createProductFailure = true;
    },
    productsListRequest: (state) => {
      state.productsListRequest = true;
      state.productsListFailure = false;
    },
    productsListSuccess: (state, action: PayloadAction<Products>) => {
      state.productsListRequest = false;
      state.productsListSuccess = action.payload;
    },
    productsListFailure: (state) => {
      state.productsListRequest = false;
      state.productsListSuccess = [];
      state.productsListFailure = true;
    },
    deleteProductRequest: (state, action: PayloadAction<number | string>) => {
      state.deleteProductRequest = true;
      state.deleteProductFailure = false;
    },
    deleteProductFailure: (state) => {
      state.deleteProductRequest = false;
      state.deleteProductFailure = true;
    },
    deleteProductSuccess: (state, action: PayloadAction<ProductID>) => {
      const productID = action.payload.productID;
      const newProducts = (state.productsListSuccess || []).filter(
        ({_id}) => _id !== productID
      );
      state.productsListRequest = false;
      state.productsListSuccess = newProducts;
    },
    updateProductSuccess: (state, action: PayloadAction<Product>) => {
      state.productsListSuccess = [
        action.payload,
        ...(state.productsListSuccess || []),
      ];
    },
  },
});

export const productActions = productsSlice.actions;

export default productsSlice.reducer;
