import React from 'react';
import { connect } from 'react-redux';
import SelectGroup from '../components/board/SelectGroup';
import { defaultGroupImage } from '../Constants';

const getGroups = (groups) => {
	return groups.id.map(id => {
		const group = groups.byId[id];
		group.image = group.image || defaultGroupImage;
		return group;
	});
};

const mapStateToProps = state => {
  return {
    groups: getGroups(state.groups),
  }
}

const SelectGroupContainer = connect(
  mapStateToProps
)(SelectGroup)

export default SelectGroupContainer;