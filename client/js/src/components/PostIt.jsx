import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import SignInPage from './sign/SignInPage';
import SignUpPage from './sign/SignUpPage';
import PrivateRoute from './helpers/PrivateRoute';
import PageNotFound from './helpers/PageNotFound';

export default () => {
    return (
    	<Switch>
    		<PrivateRoute auth={true} path='/dashboard' component={Dashboard} />
    		<Route path='/signin' component={SignInPage} />
    		<Route path='/signup' component={SignUpPage} />
    		<Route render={(props)=> <PageNotFound />}/>
    	</Switch>
    )
}
