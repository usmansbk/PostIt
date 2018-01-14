import InputField from '../common/InputField.jsx';
import Button from '../common/Button.jsx';
import React from 'react';

export default function SignInForm(props) {
  return (
      <form>

        <InputField className='input-field' id='username' type='text' name='username' label='Username'/>

        <InputField className='input-field' id='password' type='password' name='password' label='Password'>
          <span><a href='#'>Forgot account?</a></span>
        </InputField>
        
        <Button className='center-align' value='Sign In'></Button> 
      </form>
  )
}
