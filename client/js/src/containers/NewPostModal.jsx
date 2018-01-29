import React from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../redux/asyncActions';
import NewPostModal from '../components/board/NewPostModal';
import { Status } from '../redux/actionTypes';

function isPosted(status) {
	return status === Status.MESSAGE_POSTED;
}
function hasFailed(err) {
	return err === Status.FAILED_TO_POST_MESSAGE;
}

function isPosting(status, err) {
	return (status === Status.POSTING_MESSAGE) && !hasFailed(err);
}

const mapStateToProps = state => {
	return {
		posting: isPosting(state.status, state.error),
		failed: hasFailed(state.error),
		isPosted: isPosted(state.status),
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