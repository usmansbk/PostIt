import React from 'react';

export default function InputField(props) {
  return (<div className={props.className} >
    <label htmlFor={props.id}>{props.label}</label>
    <input id={props.id} type={props.type} name={props.name} value={props.value} required={props.required}/>
    {
      props.children && <span className='helper-text'>{props.children}</span> 
    }
  </div>);
} 
