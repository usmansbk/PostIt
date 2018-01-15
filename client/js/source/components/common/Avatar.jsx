import React from 'react';

export default function Avatar(props) {
  return (
    <span>
      <img src={props.url} width={props.w} height={props.h} alt={props.alt}
        className='circle responsive-img' />
    </span>
  );
}
