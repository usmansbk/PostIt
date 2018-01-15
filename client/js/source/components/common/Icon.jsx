import React from 'react';

export default function Icon(props) {
  return (
    <a href={props.href} ><i className='grey-text material-icons'>{props.children}</i></a>
  );
}
