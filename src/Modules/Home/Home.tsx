import React, {useCallback, useEffect, useRef, useState} from 'react';
import {DebounceInput} from 'react-debounce-input';
import {MdAddCircle} from 'react-icons/md';
import {useHistory} from 'react-router-dom'

import Products from './Components/Products';
import {useAppSelector, useAppDispatch} from '@/Hooks/redux';
import {productActions} from '@/Store/actions/ProductActions';
import {categoriesActions} from '@/Store/actions/CategoryActions';

const Home: React.FC = () => {
  const products = useAppSelector(
    (state) => state?.products?.productsListSuccess || []
  );
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = useAppSelector(
    (state) => state?.categories.categoriesListSuccess || []
  );
  const categoryOptions = categories.map(({name, _id}) => ({
    label: name,
    value: name,
  }));
  const dispatch = useAppDispatch();
  const history = useHistory()
  const createProducHandler = () => {
    history.push('/createProduct')
  }
  const catgoryChangeHandler = useCallback(() => {
    const value = categoryRef?.current?.value || '';
    if (!value) {
      setFilteredProducts(products);
      return products;
    }
    const newProducts = products.filter(({category}) => category === value);
    setFilteredProducts(newProducts);
    return newProducts;
  }, [products]);
  useEffect(() => {
    dispatch(productActions.productsListRequest());
    dispatch(categoriesActions.categoriesListRequest());
  }, []);
  const productSearchHandler = ({value}) => {
    const categoryProducts = catgoryChangeHandler();
    if (!value) setFilteredProducts(categoryProducts);

    const newProducts = categoryProducts.filter(({name}) =>
      name.includes(value)
    );
    setFilteredProducts(newProducts);
  };
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <div className="flex justify-between mb-4">
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={(event) =>
            productSearchHandler({value: event.target.value})
          }
          placeholder="Enter Search Criteria"
          className={`shadow-2xl rounded-2xl appearance-none block w-6/12 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        />
        <div className="relative">
          <select
            className="block shadow-2xl rounded-2xl appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={() => catgoryChangeHandler()}
            ref={categoryRef}
          >
            <option value="">Please Select</option>
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Products products={filteredProducts} />
      </div>
      <div className='fixed right-12 bottom-12 cursor-pointer' >
        <MdAddCircle size={'72px'} onClick={createProducHandler}/>
      </div>
    </>
  );
};

export default Home;
