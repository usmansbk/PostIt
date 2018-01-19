import React from 'react';

export default function AccountBox({children}) {
  let items = React.Children.map(children, child => {
    return <li>{child}</li>
  });
  return (
    <ul className='dropdown-content account' id='account'>
        { items }
    </ul>
  );
}
