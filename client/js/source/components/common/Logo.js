import React from 'react';
import '../../../../stylesheets/sass/components/Logo.scss';

export default function Logo(props) {
  return (
    <a id='brand-logo' href={props.href} className='grey-text text-darken-1 hide-on-med-and-down'>PostIt</a>
  );
}
