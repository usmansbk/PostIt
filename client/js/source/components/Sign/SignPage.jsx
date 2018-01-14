import React from 'react';
import FormControl from './FormControl.jsx';

const title = document.querySelector('title');
title.innerText = 'PostIt | Login | Sign Up';

export default class SignPage extends React.Component {
  render() {
    const footer = <footer className='center-align'>
      <div className='footer-copyright'>
        <span className='grey-text text-darken-1'>&copy; 2018</span>
      </div>
    </footer>

    return (
      <div>
        <div className='row section'>
          <FormControl className='card-panel col s12 m6 offset-m3' />
        </div>
        { footer }
     </div>
    );
  }
}
