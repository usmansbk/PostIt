import InputField from '../common/InputField';
import Button from '../common/Button';
import React from 'react';

export default () => {
  return (
      <form>

        <InputField className='input-field' id='username' type='text' name='username' label='Username'/>

        <InputField className='input-field' id='password' type='password' name='password' label='Password'>
          <span><a href='#'>Forgot account?</a></span>
        </InputField>

        <Button className='center-align' color='blue' value='Sign In'></Button>
      </form>
  )
}
