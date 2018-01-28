import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import NewGroupModal from '../components/board/NewGroupModal';

function isFailed(error) {
	return error === Status.CREATE_GROUP_FAILED;
}

function isCreating(status, error) {
	return status === Status.CREATING_GROUP && !isFailed(error);
}

const mapStateToProps = state => {
	return {
		failed: isFailed(state.error),
		creating: isCreating(state.status, state.error)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: form => {
			dispatch(createGroup(form));
		}
	}
}

const NewGroupModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewGroupModal);

export default NewGroupModalContainer;