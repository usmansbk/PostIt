import React from 'react';

export default function Icon(props) {
  return (
    <i className={'material-icons ' + (props.className || 'grey-text') } name={props.name} onClick={props.onClick}>{props.children}</i>
  );
}
