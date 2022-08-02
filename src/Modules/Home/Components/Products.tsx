import React from 'react';

import {useAppSelector} from '@/Hooks/redux';
import ProductTile from '@/Components/ProductTile/ProductTile';
import {Products} from '@/Definitions/Products.definitions';
import ProductsPlaceHolder from './ProductsPlaceHolder';

type Props = {
  products: Products;
};

const AllProducts: React.FC<Props> = ({products}) => {
  const showLoader = useAppSelector(
    (state) => state?.products?.productsListRequest
  );

  if (showLoader) return <ProductsPlaceHolder />;
  return (
    <div className="grid grid-cols-4 gap-4 w-9/12">
      {products?.length > 0 ? (
        products.map(({avatar = '', price, name = '', _id}) => (
          <ProductTile
            avatar={avatar}
            price={price}
            name={name}
            id={_id}
            key={_id}
          />
        ))
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default AllProducts;
