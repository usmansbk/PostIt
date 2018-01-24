import React from 'react';
import InputField from '../common/InputField';
import Icon from '../common/Icon';

export default ({groupName, groupDiscription, groupImage}) => {
	const style = {
		height: '180px',
	};

	return (
		<div id='edit-info' className='modal card'>
			<div className='card-content'>
				<div className='card-image'>
  	           		<img src={groupImage} style={style} />
               		<a href='#' className='btn-floating halfway-fab waves-effect waves-light grey'><Icon className='white-text'>image</Icon></a>
  	         	</div>
         		<InputField defaultValue={groupName} label='Group Name' />
         		<InputField defaultValue={groupDiscription} label='Discription' />
			</div>
			<div className='modal-footer'>
				<a href='#' className='modal-action modal-close waves-effect btn-flat'>Cancel</a>
				<a href='#' className='modal-action modal-close waves-effect btn-flat'>Save</a>
			</div>
		</div>
	);
}