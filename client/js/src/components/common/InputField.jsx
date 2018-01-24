import React from 'react';

/**
 * This component takes a hint text as a child text Node
 */
export default (props) => {
  return (<div className={props.className} >
    <label htmlFor={props.id}>{props.label}</label>
    <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
    {
      props.children && <span className='helper-text'>{props.children}</span> 
    }
  </div>);
} 
