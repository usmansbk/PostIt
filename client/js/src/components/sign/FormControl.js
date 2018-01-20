import React from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm'; 

export default class FormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {type: 'signin' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const type = this.state.type;
    if (type === 'signin') {
      this.setState({ type: 'signup' });
    } else { this.setState({ type: 'signin' } )};
  }

  render() {

    const link = <div className='center-align section'>
         <span>
           <a href='#' onClick={this.handleClick}>{
             (this.state.type === 'signin') ?
             'Don\'t have an account?'
             : 'Have an account?'
           }
           </a>
         </span>
       </div>;

    const form = (this.state.type === 'signin') ?
            <div className={this.props.className}>
            <div className='grey-text text-darken-1'>
              <h4>PostIt</h4>
            </div>
            <p>Create groups with friends and collegues for notifications...</p>
            <div className='divider'></div>
            <h5 className='section'>Sign in</h5>
            <SignInForm />
            { link }
            </div>
          :
           <div className={this.props.className}>
             <h5>Create an account</h5>
             <SignUpForm />
            { link }
           </div>;


    return form;
  }
}
