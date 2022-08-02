import {call, put} from 'redux-saga/effects';

import CategoryService from '@/Services/CategoryServices';
import {categoriesActions} from '@/Store/actions/CategoryActions';

export function* getCategories() {
  try {
    const payload = yield call(new CategoryService().getCategories);
    const {categories = []} = payload || {}
    yield put({
      type: categoriesActions.categoriesListSuccess.type,
      payload: categories,
    });
  } catch (error) {
    yield put({
      type: categoriesActions.categoriesListFailure.type,
    });
  }
}
