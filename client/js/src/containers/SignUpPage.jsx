import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/asyncActions';
import SignUpPage from '../components/sign/SignUpPage';

const mapStateToProps = state => {
	return {
		status: state.status
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(signUp(form));
		}
	}
}

const SignUpPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignUpPage);

export default SignUpPageContainer;