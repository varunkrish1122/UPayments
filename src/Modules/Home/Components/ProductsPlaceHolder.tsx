import React from 'react';

import PlaceHolder from '@/Components/PlaceHolder/PlaceHolder';

const ProductsPlaceHolder: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-9/12">
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
    </div>
  );
};

export default ProductsPlaceHolder;
