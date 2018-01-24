import React from 'react';
import '../../../../stylesheets/sass/components/Sidepanel.scss';

export default ({className, children}) => {
  return (
   <div className={'my-side-nav col m2 hide-on-med-and-down my-side-nav'}>
      { children }
    </div>
  );
}
