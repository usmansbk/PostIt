import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import NewGroupModal from '../components/board/NewGroupModal';

function isCreated(status) {
	return status === Status.GROUP_CREATED;
}
function hasFailed(error) {
	return error === Status.CREATE_GROUP_FAILED;
}

function isCreating(status, error) {
	return status === Status.CREATING_GROUP && !hasFailed(error);
}

const mapStateToProps = state => {
	return {
		failed: hasFailed(state.error),
		creating: isCreating(state.status, state.error),
		isCreated: isCreated(state.status)
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