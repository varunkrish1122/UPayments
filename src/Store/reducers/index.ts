import ProductReducer from '@/Store/actions/ProductActions';
import ActiveProductDataReducer from '@/Store/actions/ActiveProductData';
import CategoryReducer from '@/Store/actions/CategoryActions';

const rootReducer = {
  products: ProductReducer,
  categories: CategoryReducer,
  activeProductData: ActiveProductDataReducer,
};

export default rootReducer;
