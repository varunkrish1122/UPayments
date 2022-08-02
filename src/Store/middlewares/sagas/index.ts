import {all, takeEvery} from 'redux-saga/effects';

import {productActions} from '@/Store/actions/ProductActions';
import {activeProductActions} from '@/Store/actions/ActiveProductData';
import {categoriesActions} from '@/Store/actions/CategoryActions';
import {
  getProducts,
  getProductDetails,
  createProduct,
  deleteProduct,
} from './productSagas';
import {getCategories} from './categorySagas';

export default function* rootSagas() {
  yield all([
    // Products
    takeEvery(
      productActions.productsListRequest.type,
      getProducts
    ),
    takeEvery(
      productActions.createProductRequest.type,
      createProduct
    ),
    takeEvery(
      productActions.deleteProductRequest.type,
      deleteProduct
    ),

    // Active Product
    takeEvery(
      activeProductActions.activeProductRequest.type,
      getProductDetails
    ),

    // Category
    takeEvery(
      categoriesActions.categoriesListRequest.type,
      getCategories
    ),
  ]);
}
