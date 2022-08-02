export const enum HttpMethods {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
  patch = 'PATCH',
}

export enum ApiPath {
  // Product API Paths
  getProducts = '/products/',
  getProductDetails = '/products/{id}',
  createProduct = '/products',
  deleteProduct = '/products/{id}',

  // Category API Paths
  getCategories = '/categories/',
  getCategoryDetails = '/categories/{id}'
}

export const enum HeaderType {
  min,
  full,
  auth,
  fullNoTilde,
}

export const enum HttpTimeouts {
  short = 15000,
  medium = 60000,
  long = 180000,
  extraLong = 600000,
}
