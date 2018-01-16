import React from 'react';

export default function Icon(props) {
  return (
    <i className={(props.className || 'grey-text') + ' material-icons'} name={props.name} onClick={props.onClick}>{props.children}</i>
  );
}
