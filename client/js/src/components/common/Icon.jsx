import React from 'react';

export default ({className, children, ...rest}) => {
  return (
    <i 
    className={'material-icons ' + className }
    {...rest}
    >
    {children}
    </i>
  );
}
