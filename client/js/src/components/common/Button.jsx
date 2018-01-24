import React from 'react';
/**
 * Button component  that accepts optional material design icon as a child text Node
 */
export default (props) => {
	const disabled = props.disabled && 'disabled'
  return (
    <div className={props.className}>
      <button type={props.type} className={'btn waves-effect waves-light ' + props.color + ' ' + disabled }>
        {props.value}
        { props.children && <i className='material-icons right'>{props.children}</i> }
      </button>
    </div>
  );
}
