import React from 'react';
import InputField from '../common/InputField.jsx';
import Button from '../common/Button.jsx';

export default class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.validatePassword = this.validatePassword.bind(this);
    this.state = { password: '', confirm: '', isInvalid: false };
  }

  validatePassword(event) {
    const value = event.target.value;
    const id = event.target.id;
    this.setState({
      [id]: value
    }, () => {
      if (this.state.confirm !== this.state.password) {
        this.setState({isInvalid: true});
        return;
      }
      this.setState({isInvalid: false});
    });
  }

  render() {
   const error = <p className='red-text'>Password doesn't match</p>
    return (
      <form>

        <InputField id='username' type='text' required='true' label='Username' className='input-field'>
          Name can only contain letters, numbers and underscore
        </InputField>

        <InputField id='email' type='email' required='true' label='Email address' className='input-field'/>

        <InputField id='password' type='password' required='true' value={this.state.password} label='Password' validate='validate' className='input-field' onChange={this.validatePassword} >
          Password must be 8-32 characters long
        </InputField>

        <InputField id='confirm' type='password' required='true' label='Confirm password' className='input-field' onChange={this.validatePassword} value={this.state.fconfirm} />
        { this.state.isInvalid && error }
        <Button type='submit' className='center-align' color='blue' value='Sign Up'>send</Button>

     </form>
    );
  }
}
