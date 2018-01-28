import React from 'react';
import Icon from '../common/Icon';

export default ({onClick, onChange, children}) => {
  return (
    <div className='navbar-fixed nav-wrapper'>
      <nav>
        <div className='input-field'>
          <input id='searchbar' type='search' className='center-align grey lighten-3' placeholder='Search PostIt' onChange={onChange}/>
          <label className='label-icon grey-text' htmlFor='searchbar'><Icon>search</Icon></label>
          <Icon name='cancel-search' onClick={onClick}>close</Icon>
        </div>
        {children}
      </nav>
    </div>
  )
}
