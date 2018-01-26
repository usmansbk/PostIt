import React from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../redux/asyncActions';
import NewPostModal from '../components/board/NewPostModal';

const mapStateToProps = state => {
	return {
		status: state.status,
		groups: state.groups
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(postMessage(form));
		}
	}
}

const NewPostModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewPostModal);

export default NewPostModalContainer;