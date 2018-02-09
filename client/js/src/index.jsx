import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import PageNotFound from './components/helpers/PageNotFound';
import store from './PostIt';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
 );

export default store; 