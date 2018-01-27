import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import SignInPage from '../containers/SignInPage';
import SignUpPage from '../containers/SignUpPage';
import PrivateRoute from './helpers/PrivateRoute';
import PageNotFound from './helpers/PageNotFound';
export default () => {
    return (
    		<div>
	    		<PrivateRoute exact auth={true} path='/dashboard' component={Dashboard} />
	    		<Route exact path='/' render={(props) => <SignInPage /> } />
	    		<Route exact path='/signup' component={SignUpPage} />
	    		<Route exact path='/notfound' render={ props => <PageNotFound />} />
    		</div>
    )
}
