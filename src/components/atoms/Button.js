import React from 'react';

const Button = ({ children, bgWhite, className, textBase, ...props }) => (
  <button
    className={` ${textBase ? 'text-base' : 'text-lg'} font-semibold rounded-md
  ${className} ${bgWhite ? 'bg-white' : 'bg-mainBrandColor'}`}
    type="button"
    {...props}>
    {children}
  </button>
);

export default Button;
