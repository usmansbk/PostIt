import React from 'react';
import SignPage from './sign/SignPage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';

export default function PostIt (props) {
    //return <SignPage />;
    return <Dashboard
      location={props.location}
      groups={props.groups}
      posts={props.posts}
      search={props.search}
      account={props.account}
      notifications={props.notifications}
    />
}
