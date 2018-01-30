import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Footer from '../common/Footer';
import Loader from '../common/Loader';
import { setPageTitle } from '../../helpers/utils';

export default class SignInPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const {target} = event;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  componentWillReceiveProps(nextProps) {
    const { history, status } = nextProps;
     this.props.handleSignin(history, status);
  }

  render() {
    setPageTitle('Sign In | PostIt');
    const footer = {
      position: 'relative',
      bottom: '2%',
      width: '100%'
    };

    const { signingIn, failed, signedIn } = this.props;
    
    const loader =  <div className='center-align section'>
                      <Loader />
                    </div>
    const error = <p className='red-text center-align'>Invalid username/password</p>

    const showLoader = signingIn && loader;
    const showError = failed && error;

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
            <form onSubmit={this.handleSubmit}>
              <InputField className='input-field' id='username' type='text' name='username' label='Username' onChange={this.handleChange} value={this.state.username} />

              <InputField className='input-field' id='password' type='password' name='password' label='Password' onChange={this.handleChange} value={this.state.password} >
                <span><a href='#'>Forgot account?</a></span>
              </InputField>

              <Button type='submit' className='center-align' color='blue' value='Sign In'></Button>
              { showLoader }
              { showError }
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
}
