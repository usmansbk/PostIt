import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { signIn } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import SignInPage from '../components/sign/SignInPage';

function hasFailed(status) {
	return (status === Status.SIGNIN_FAILED);
}

function signingIn(status) {
 	return (status === Status.SIGNING_IN);
}

const mapStateToProps = state => {
	return {
		status: state.session,
		signingIn: signingIn(state.session),
		failed: hasFailed(state.session)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(signIn(form));
		},
		handleSignin: (history, status) => {
			if (status === Status.SIGNED_IN)
      			history.push('/dashboard');
		}
	}
}

const SignInPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignInPage);

export default withRouter(SignInPageContainer);