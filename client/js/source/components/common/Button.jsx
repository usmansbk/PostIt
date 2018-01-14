import React from 'react';

export default function Button(props) {
  return (
    <div className={props.className}>
      <button type={props.type} className='btn waves-effect waves-light blue'>
        {props.value}
        { props.children && <i className='material-icons right'>{props.children}</i> }
      </button>
    </div>
  );
}
