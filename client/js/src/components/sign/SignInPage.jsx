import React from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Footer from '../common/Footer';
import { setPageTitle } from '../../helpers/utils';

export default ({match}) => {
  setPageTitle('Sign In | PostIt');
  const footer = {
    position: 'relative',
    bottom: '2%',
    width: '100%'
  };

  return (
    <div>
    <div className='container'>
   	  <div className='row section'>
        <div className='col s12 l6 offset-l3 card'>
          <div className='grey-text text-darken-1'>
            <h4>PostIt</h4>
          </div>
          <p>Create groups with friends and collegues for notifications...</p>
          <div className='divider'></div>
          <h5>Welcome</h5>
          <form>
            <InputField className='input-field' id='username' type='text' name='username' label='Username'/>

            <InputField className='input-field' id='password' type='password' name='password' label='Password'>
              <span><a href='#'>Forgot account?</a></span>
            </InputField>

            <Button className='center-align' color='blue' value='Sign In'></Button>
          </form>
          <div className='center-align section'>
            <NavLink to='/signup'>Don't have an account?</NavLink>
          </div>
        </div>
      </div>
      </div>
      <div style={footer}>
        <Footer className='center-align' />
      </div>
    </div>
  )
}
