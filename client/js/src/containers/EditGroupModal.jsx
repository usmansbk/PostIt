import React from 'react';
import { connect } from 'react-redux';
import { predicate } from '../helpers/utils';
import { requestUpdateGroup } from '../redux/asyncActions';
import { Status } from '../redux/actionTypes';
import EditGroupModal from '../components/board/EditGroupModal';

const isUpdated = (state) => predicate('status', state.status, Status.GROUP_UPDATED, state);

const hasFailed = (state) => predicate('error', state.error, Status.UPDATE_GROUP_FAILED, state);

const isUpdating = (status, state) => (status === Status.UPDATING_GROUP);

function get(key, groups, id) {
  const group = groups.byId[id];
  return group[key];
}

const mapStateToProps = state => {
  return {
    failed: hasFailed(state),
    creating: isUpdating(state.status, state),
    isCreated: isUpdated(state),
    groupName: get('name', state.groups, state.group),
    id: state.group,
    discription: get('purpose', state.groups, state.group)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleUpdate: form => {
      dispatch(updateGroup(form));
      console.log('Update', form);
    }
  }
}

const EditGroupModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupModal);

export default EditGroupModalContainer;