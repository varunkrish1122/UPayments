import {makeAPICall} from './api';
import {ApiPath, HttpMethods, HeaderType} from './api/definitions';

class CategoryService {
  getCategories() {
    return makeAPICall(ApiPath.getCategories, HttpMethods.get, HeaderType.min);
  }

  getCategoryDetails(categoryID: string) {
    const newApiPath = ApiPath.getCategoryDetails.replace('{id}', categoryID);
    return makeAPICall(newApiPath, HttpMethods.get, HeaderType.min);
  }
}

export default CategoryService;
