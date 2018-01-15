import React from 'react';

export default function Avatar(props) {
  return (
    <div id={props.id} className={props.className}>
      <img src={props.url} alt={props.alt}
        className='circle responsive-img' />
    </div>
  );
}
