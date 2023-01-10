import React from 'react';

const Heading = ({
  children,
  textLeft,
  textExtraLarge,
  className,
  hasFontExtraBold,
  ...props
}) => (
  <h1
    className={`${textExtraLarge ? 'md:text-5xl' : 'md:text-4xl'} ${
      hasFontExtraBold ? 'font-extrabold' : 'font-bold'
    }  ${className} ${textLeft ? 'text-left' : 'text-center'}
      text-textDark text-3xl tracking-[0.2px]
`}
    {...props}>
    {children}
  </h1>
);

export default Heading;
