import React from 'react';
import '../../../../stylesheets/sass/components/Search.scss';

export default function Search (props) {
  return (
    <div id='search' className={props.visibility}>
      <input type={props.type} placeholder={props.placeholder} className={props.visibility} />
    </div>
  );
}
