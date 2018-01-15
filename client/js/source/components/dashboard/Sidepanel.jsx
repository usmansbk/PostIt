import React from 'react';
import '../../../../stylesheets/sass/components/Sidepanel.scss';

export default function Sidepanel(props) {
  return (
   <div className={'my-side-nav ' + props.className}>
      {
        props.children
      }
    </div>
  );
}
