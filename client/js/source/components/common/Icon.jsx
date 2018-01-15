import React from 'react';

export default function Icon(props) {
  return (
    <i className={'grey-text material-icons ' + props.className } name={props.name} onClick={props.onClick}>{props.children}</i>
  );
}
