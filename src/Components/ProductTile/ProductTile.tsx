import React from 'react';
import {Link} from 'react-router-dom';
import {MdDelete} from 'react-icons/md';

import {useAppDispatch} from '@/Hooks/redux';
import {productActions} from '@/Store/actions/ProductActions';

type Props = {
  name: string;
  avatar: string;
  price: number;
  id: number | string;
};

const ProductTile: React.FC<Props> = ({avatar = '', price, name = '', id}) => {
  const dispatch = useAppDispatch();
  const deleteHanadler = (event) => {
    dispatch(productActions.deleteProductRequest(id));
    event.preventDefault();
  };

  return (
    <Link to={`productInfo/${id}`}>
      <div className="">
        <span
          onClick={deleteHanadler}
          className="cursor-pointer flex justify-end relative top-10 right-2"
        >
          <MdDelete
            size={'32px'}
            color="#fca5a5"
          />
        </span>
        <div className="bg-white p-4 rounded-2xl mb-4 shadow-2xl cursor-pointer flex justify-center">
          <img src={avatar} alt={name} className="w-2/3 h-80 object-contain" />
        </div>

        <div className="font-bold">{name}</div>
        <div className="font-bold">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
