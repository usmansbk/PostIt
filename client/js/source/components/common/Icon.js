import React from 'react';

export default (props) => {
  return (
    <i id={props.id} className={(props.className || 'grey-text') + ' material-icons'} name={props.name} onClick={props.onClick} data-target={props.data}>{props.children}</i>
  );
}
