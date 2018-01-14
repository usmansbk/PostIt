import React from 'react';

export default function Footer(props) {
  const year = (new Date()).getFullYear();
  return (
    <footer className='center-align'>
      <div className='footer-copyright'>
        <small className='grey-text text-darken-1'>&copy; {year} Andela <b>&middot;</b> MIT License <b>&middot;</b> GitHub <b>&middot;</b> facebook
        </small>
      </div>
    </footer>
  );
}
