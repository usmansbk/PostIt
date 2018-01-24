import React from 'react';
import { connect } from 'react-redux';
import SelectGroup from '../components/board/SelectGroup';
import { defaultGroupImage } from '../utils/constants';

const getGroups = (groups) => {
	if (Object.keys(groups).length === 0) return null;
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