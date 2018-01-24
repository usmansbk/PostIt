import React from 'react';

export default function Footer(props) {
  const year = (new Date()).getFullYear();
  return (
    <footer>
      <div className='footer-copyright'>
        <small className='grey-text'><p className={props.className}>&copy; {year} Andela <b>&middot;</b> MIT License <b>&middot;</b> GitHub <b>&middot;</b> facebook
        </p></small>
      </div>
    </footer>
  );
}
