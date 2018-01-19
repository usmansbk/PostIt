import React from 'react';

export default function AccountBox({children, id}) {
  let items = React.Children.map(children, child => {
    return <li>{child}</li>
  });
  return (
    <ul className='dropdown-content' id={id}>
        { items }
    </ul>
  );
}
