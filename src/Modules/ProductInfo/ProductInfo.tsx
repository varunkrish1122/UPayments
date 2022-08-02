import {useAppDispatch, useAppSelector} from '@/Hooks/redux';
import {activeProductActions} from '@/Store/actions/ActiveProductData';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductInfoPlaceHolder from './ProductInfoPlaceHolder';

const ProductInfo: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {productID} = params;
  const productInfo = useAppSelector(
    (state) => state?.activeProductData?.activeProductSuccess
  );
  const showLoader = useAppSelector(
    (state) => state?.activeProductData?.activeProductRequest
  );
  useEffect(() => {
    dispatch(activeProductActions.activeProductRequest(productID));
  }, [productID]);
  const {avatar = '', name, description, price} = productInfo || {};
  if (showLoader) return <ProductInfoPlaceHolder />;
  return (
    <div className="flex justify-center">
      <>
        {productInfo ? (
          <div className="w-9/12">
            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <div className="bg-white p-4 rounded-2xl mb-4 shadow-2xl cursor-pointer flex justify-center">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-2/3 h-80 object-contain"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <div className="font-bold text-4xl">{name}</div>
                  <div className="font-bold text-2xl">
                    <span>$</span>
                    <span>{price}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{border: '2px solid grey', marginTop: '32px'}}></hr>
            <div className="grid grid-rows-2 mt-4">
              <div className="text-2xl font-bold">Description</div>
              <div className="mt-4">{description}</div>
            </div>
          </div>
        ) : (
          <p>No Product Information</p>
        )}
      </>
    </div>
  );
};

export default ProductInfo;
