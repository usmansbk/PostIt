import React from 'react';
import Icon from '../common/Icon.jsx';
import '../../../../stylesheets/sass/components/PostInfo.scss';

export default function PostInfo(props) {
  const { post } = props;
  return (
    <div className='section'>
      <div className='valign-wrapper left'>
        <Icon>person</Icon>
        <span> {post.author.name} </span>
        <Icon>chevron_right</Icon>
        <span className='blue-text'> {post.group.name} </span>
        <Icon className='tiny align'>group_work</Icon>
      </div>
      <div className='right'>
        <span className='grey-text right'>1h</span>
      </div>
    </div>
  );
}
