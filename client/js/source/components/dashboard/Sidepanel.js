import React from 'react';
import '../../../../stylesheets/sass/components/Sidepanel.scss';

export default function Sidepanel({className, children}) {
  return (
   <div className={'my-side-nav ' + className}>
      {
        children
      }
    </div>
  );
}
