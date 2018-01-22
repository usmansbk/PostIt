import React from 'react';
import { connect } from 'react-redux';
import SelectGroup from '../components/board/SelectGroup';
import { defaultGroupImage } from '../Constants';

const getGroups = (groups) => {
	if (!groups) return groups;
	return groups.gids.map(id => {
		const group = groups.byId[id];
		group.image = group.image || defaultGroupImage;
		return group;
	});
};

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups),
    isFetching: state.groups.isFetching
  }
}

const SelectGroupContainer = connect(
  mapStateToProps
)(SelectGroup)

export default SelectGroupContainer;