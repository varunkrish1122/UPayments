import {call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import ProductService from '@/Services/ProductServices';
import {productActions, CreateProduct} from '@/Store/actions/ProductActions';
import {activeProductActions} from '@/Store/actions/ActiveProductData';

export function* getProducts() {
  try {
    const payload = yield call(new ProductService().getProducts);
    const {products = []} = payload || {};
    yield put({
      type: productActions.productsListSuccess.type,
      payload: products,
    });
  } catch (error) {
    yield put({
      type: productActions.productsListFailure.type,
    });
  }
}

export function* getProductDetails({
  payload: productID,
}: PayloadAction<string>) {
  try {
    const payload = yield call(
      new ProductService().getProductDetails,
      productID
    );
    const {product = {}} = payload || {};
    yield put({
      type: activeProductActions.activeProductSuccess.type,
      payload: product,
    });
  } catch (error) {
    yield put({
      type: activeProductActions.activeProductFailure.type,
    });
  }
}

export function* createProduct({
  payload: {formData: product, history},
}: PayloadAction<CreateProduct>) {
  try {
    const payload = yield call(new ProductService().createProduct, product);
    yield put({
      type: productActions.createProductSuccess.type,
      product,
    });
    history.push('/');
  } catch (error) {
    yield put({
      type: productActions.createProductFailure.type,
    });
  }
}

export function* deleteProduct({payload: productID}: PayloadAction<string>) {
  try {
    const response = yield call(new ProductService().deleteProduct, productID);
    yield put({
      type: productActions.deleteProductSuccess.type,
      payload: {productID: response?.id},
    });
  } catch (error) {
    yield put({
      type: productActions.deleteProductFailure.type,
    });
  }
}
