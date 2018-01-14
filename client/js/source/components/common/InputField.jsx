import React from 'react';

/**
 * This component takes a hint text as a child text Node
 */
export default function InputField(props) {
  return (<div className={props.className} >
    <label htmlFor={props.id}>{props.label}</label>
    <input className={props.validate} id={props.id} type={props.type} name={props.name} value={props.value} required={props.required} onChange={props.onChange}/>
    {
      props.children && <span className='helper-text'>{props.children}</span> 
    }
  </div>);
} 
