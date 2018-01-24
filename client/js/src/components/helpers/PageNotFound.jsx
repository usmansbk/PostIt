import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import Footer from '../common/Footer';
import { setPageTitle } from '../../helpers/utils';

export default () => {
	setPageTitle('Page not found | PostIt');
	const footer = {
		position: 'absolute',
		bottom: '0px',
		width: '100%'
	};

	const style = {
		paddingLeft: '10px',
		paddingRight: '10px'
	};

	return (
		<div>
			<div className='navbar-fixed'>
				<nav>
					<div className='nav-wrapper white' style={style}>
						<Logo className='dont-hide' />
						<NavLink to='/signup'><span className='blue-text'>Sign Up</span></NavLink>
						<NavLink to='/signin'><span className='blue-text right'>Log in to PostIt</span></NavLink>
					</div>
				</nav>
			</div>
			<div className='container center-align'>
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<h6>The link you followed may be broken</h6>
			</div>
			<div className='section center-align'>
				<br /><NavLink to='/dashboard'>Dev-Dashboard</NavLink>
			</div>
			<div style={footer}>
				<Footer className='center-align' />
			</div>
		</div>
	);
}