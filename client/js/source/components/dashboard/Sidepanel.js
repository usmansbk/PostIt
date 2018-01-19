import React from 'react';
import '../../../../stylesheets/sass/components/Sidepanel.scss';

export default ({className, children}) => {
  return (
   <div className={'my-side-nav ' + className}>
      { children }
    </div>
  );
}
