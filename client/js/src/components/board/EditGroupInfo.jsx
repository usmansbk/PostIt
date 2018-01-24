import React from 'react';
import InputField from '../common/InputField';
import Icon from '../common/Icon';

function uploadFile(event) {
	const elem = document.querySelector('#inputfile');
	elem.click();
}

export default ({groupName, groupDiscription, groupImage}) => {
	const style = {
		height: '180px',
	};

	const inputStyle = {
		display: 'none'
	}
	return (
		<div id='edit-info' className='modal card'>
			<div className='card-content'>
				<div className='card-image'>
  	           		<img src={groupImage} style={style} />
               		<a href='#' className='btn-floating halfway-fab waves-effect waves-light grey' onClick={uploadFile}><Icon className='white-text'>image</Icon></a>
  	         	</div>
  	         	<input type='file' id='inputfile' style={inputStyle} />
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