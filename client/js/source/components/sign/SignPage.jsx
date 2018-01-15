import React from 'react';
import FormControl from './FormControl.jsx';
import Footer from '../common/Footer.jsx';

const title = document.querySelector('title');
title.innerText = 'PostIt | Login | Sign Up';

export default class SignPage extends React.Component {
  render() {
    return (
      <div>
        <div className='row section'>
          <FormControl className='card-panel col s12 m6 offset-m3' />
        </div>
				<Footer />
     </div>
    );
  }
}
