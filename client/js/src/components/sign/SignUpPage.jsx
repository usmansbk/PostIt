import React from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Footer from '../common/Footer';
import Loader from '../common/Loader';
import { setPageTitle } from '../../helpers/utils';

export default class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: '',
      invalidPassword: true,
      isInvalid: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.getAttribute('name');

    this.setState({
      [name]: value,
    }, () => {
      const password = this.state.password;
      const invalidPassword = (password.length < 8 || password.length > 32) || (this.state.confirm !== this.state.password);
      const invalidUsernameAndEmail = this.state.username.length === 0 || this.state.email.length === 0;
      const isInvalid = invalidPassword || invalidUsernameAndEmail;
      this.setState({
        isInvalid,
        invalidPassword
      });
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  componentWillReceiveProps(nextProps) {
    const { history, status } = nextProps;
    this.props.handleSignup(history, status);
  }

  render() {
    setPageTitle('Sign Up | PostIt');
    const footer = {
      position: 'relative',
      bottom: '2%',
      width: '100%'
    };

    const { signingUp, failed } = this.props;
    const loader =  <div className='center-align section'>
                      <Loader />
                    </div>
    const message = <p className='red-text center-align'>Failed to create account</p>

    const showLoader = signingUp && loader;
    const showError = failed && message;

    const error = <p className='red-text'>Password doesn't match</p>
    return (
      <div>
      <div className='container'>
        <div className='row section'>
          <div className='col s12 l6 offset-l3 card'>
          <h5>Create an account</h5>
            <form onSubmit={this.handleSubmit}>
              <InputField id='username' name='username' type='text' required={true} label='Username' className='input-field' onChange={this.handleChange}>
                Name can only contain letters, numbers and underscore
              </InputField>

              <InputField id='email' name='email' type='email' required={true} label='Email address' className='input-field' onChange={this.handleChange}/>

              <InputField id='password' name='password' type='password' required={true} value={this.state.password} label='Password' validate='validate' className='input-field' onChange={this.handleChange} >
                Password must be 8-32 characters long
              </InputField>

              <InputField id='confirm' name='confirm' type='password' required={true} value={this.state.confirm} label='Confirm password' className='input-field' onChange={this.handleChange} />
              { this.state.invalidPassword && error }
              <Button type='submit'className='center-align' color='blue' value='Sign Up' disabled={this.state.isInvalid}>send</Button>
              { showLoader }
              { showError  }
            </form>
            <div className='center-align section'>
              <NavLink to='/'>Have an account?</NavLink>
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