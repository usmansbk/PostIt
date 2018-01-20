import React from 'react';
import Navbar from '../components/dashboard/Navbar';

export default class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let locationName = 'Group',
    avatarImage = '../../../../images/avatar.jpg'
    return <Navbar locationName={locationName} avatarImage={avatarImage} />
  }
}
