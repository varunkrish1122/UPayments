import PlaceHolder from '@/Components/PlaceHolder/PlaceHolder';
import React from 'react';

const ProductInfoPlaceHolder: React.FC = () => {
  return (
    <div className="w-9/12">
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <div className="bg-white p-4 rounded-2xl mb-4 shadow-2xl cursor-pointer flex justify-center">
            <PlaceHolder />
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="font-bold text-4xl">
              <PlaceHolder />
            </div>
            <div className="font-bold text-2xl">
              <PlaceHolder />
            </div>
          </div>
        </div>
      </div>
      <hr style={{border: '2px solid grey', marginTop: '32px'}}></hr>
      <div className="grid grid-rows-2 mt-4">
        <PlaceHolder />
      </div>
    </div>
  );
};

export default ProductInfoPlaceHolder;
