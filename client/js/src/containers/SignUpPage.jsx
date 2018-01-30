import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import SignUpPage from '../components/sign/SignUpPage';

function signingUp(status) {
	return (status === Status.SIGNING_UP);
}

function hasFailed(status) {
	return (status === Status.SIGNUP_FAILED);
}

const mapStateToProps = state => {
	return {
		status: state.session,
		signingUp: signingUp(state.session),
		failed: hasFailed(state.session)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(signUp(form));
		},
		handleSignup: (history, status) => {
			if (status === Status.SIGNED_IN)
      			history.push('/');
		}
	}
}

const SignUpPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignUpPage);

export default withRouter(SignUpPageContainer);