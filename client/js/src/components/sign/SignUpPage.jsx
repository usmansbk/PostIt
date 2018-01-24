import React from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Footer from '../common/Footer';
import { setPageTitle } from '../../helpers/utils';

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
    setPageTitle('Sign Up | PostIt');
    const footer = {
      position: 'relative',
      bottom: '2%',
      width: '100%'
    };

   const error = <p className='red-text'>Password doesn't match</p>
    return (
      <div>
      <div className='container'>
        <div className='row section'>
          <div className='col s12 l6 offset-l3 card'>
          <h5>Create an account</h5>
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
            <div className='center-align section'>
              <NavLink to='/signin'>Have an account?</NavLink>
            </div>
          </div>
        </div>
        </div>
        <div style={footer}>
          <Footer className='center-align' />
        </div>
      </div>
    );
  }
}
