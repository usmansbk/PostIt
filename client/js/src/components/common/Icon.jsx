import React from 'react';

export default (props) => {
  return (
    <i id={props.id}
    title={props.title}
    className={'material-icons ' + props.className }
    name={props.name}
    onClick={props.onClick}
    data-target={props['data-target']}
    label={props.label}
    >
    {props.children}
    </i>
  );
}
