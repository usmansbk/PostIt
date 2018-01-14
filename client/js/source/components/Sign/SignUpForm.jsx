import React from 'react';
import InputField from '../common/InputField.jsx';
import Button from '../common/Button.jsx';

export default function SignUpForm(props) {
  return (
      <form>

        <InputField id='fusername' type='text' required='true' label='Username' className='input-field'>
          Name can only contain letters, numbers and underscore
        </InputField>

        <InputField id='femail' type='email' required='true' label='Email address' className='input-field'/>
        
        <InputField id='fpassword' type='password' required='true' label='Password' className='input-field'>
          Password must be 8-32 characters long
        </InputField>
        
        <InputField id='fconfirm' type='password' required='true' label='Confirm password' className='input-field' />
        <Button type='submit' className='center-align' value='Sign Up'>send</Button>
      
     </form>
  )
}
