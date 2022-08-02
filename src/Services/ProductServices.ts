import { Product } from '@/Definitions/Products.definitions';
import {makeAPICall} from './api';
import {ApiPath, HttpMethods, HeaderType} from './api/definitions';

class ProductService {
  getProducts() {
    return makeAPICall(ApiPath.getProducts, HttpMethods.get, HeaderType.min);
  }

  getProductDetails(productID: string) {
    const newApiPath = ApiPath.getProductDetails.replace('{id}', productID);
    return makeAPICall(newApiPath, HttpMethods.get, HeaderType.min);
  }

  createProduct(productData: Product){
    return makeAPICall(ApiPath.createProduct, HttpMethods.post, HeaderType.min, null, productData);
  }

  deleteProduct(productID: string) {
    const newApiPath = ApiPath.deleteProduct.replace('{id}', productID);
    return makeAPICall(newApiPath, HttpMethods.delete, HeaderType.min);
  }
}

export default ProductService;
