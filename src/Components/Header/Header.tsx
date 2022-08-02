import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="rounded-md flex bg-white p-4 flex-row justify-between shadow-2xl mb-8">
      <div className="font-bold">UPayments Store</div>
      <div className="font-bold">Register</div>
    </div>
  );
};

export default Header;
