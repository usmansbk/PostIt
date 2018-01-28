import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import SignUpPage from '../components/sign/SignUpPage';

function signingUp(status) {
	return (status === Status.SIGNING_UP);
}

function isFailed(status) {
	return (status === Status.SIGNUP_FAILED);
}

const mapStateToProps = state => {
	return {
		status: state.status,
		signingUp: signingUp(state.status),
		failed: isFailed(state.status)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(signUp(form));
		},
		handleSignup: (history, status) => {
			if (status === Status.SIGNED_UP)
      			history.push('/dashboard');
		}
	}
}

const SignUpPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignUpPage);

export default withRouter(SignUpPageContainer);