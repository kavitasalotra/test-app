import React from 'react';
import Data from '../Data';

const Button = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="bg-black text-black p-1 px-2 mx-5 "
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className=" text-white p-1 px-3 mx-5 "
          onClick={() => setItem(Data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Button;
