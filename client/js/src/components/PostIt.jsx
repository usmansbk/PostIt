import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import SignInPage from './sign/SignInPage';
import SignUpPage from './sign/SignUpPage';
import PrivateRoute from './PrivateRoute';

export default () => {
    return (
    	<Switch>
    		<PrivateRoute auth={true} path='/dashboard' component={Dashboard} />
    		<Route path='/signin' component={SignInPage} />
    		<Route path='/signup' component={SignUpPage} />
    		<Route render={
    			(props)=> <div>
	    			<NavLink to='/dashboard'>Dashboard</NavLink><br />
	    			<NavLink to='/signin'>Sign in</NavLink><br />
	    			<NavLink to='/signup'>Sign up</NavLink><br />
    			</div>
    			}
    		/>
    	</Switch>
    )
}
