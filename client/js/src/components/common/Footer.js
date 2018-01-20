import React from 'react';

export default function Footer(props) {
  const year = (new Date()).getFullYear();
  return (
    <footer className={ props.className || 'center-align' }>
      <div className='footer-copyright'>
        <small className='grey-text'>&copy; {year} Andela <b>&middot;</b> MIT License <b>&middot;</b> GitHub <b>&middot;</b> facebook
        </small>
      </div>
    </footer>
  );
}
