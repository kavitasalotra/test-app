import React from 'react';

const Paragraph = ({
  children,
  textLeft,
  hasTextLarge,
  className,
  ...props
}) => (
  <p
    className={` ${hasTextLarge ? 'text-lg' : 'text-base'}
       font-normal
     ${className}
      ${textLeft ? 'text-left' : 'text-center'} text-textGray`}
    {...props}>
    {children}
  </p>
);

export default Paragraph;
