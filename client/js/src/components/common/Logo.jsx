import React from 'react';
import '../../../../stylesheets/sass/components/Logo.scss';

export default (props) => {
  return (
      <span id='brand-logo'
      href={props.href}
      className={'grey-text text-darken-1 ' + (props.className || 'hide-on-med-and-down')
      }>PostIt</span>
  );
}
