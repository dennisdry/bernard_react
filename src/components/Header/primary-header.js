import React from 'react';

import HeaderLogo from './header-logo';
import ProfilePicture from './../Profile/profile-picture';
import HeaderMenu from './header-menu';

export default class PrimaryHeader extends React.Component {
  render() {
    return (
      <div className="primary">
          <div className="container">
              <div className="row header-row align-items-center">
                  <HeaderLogo />
                  <HeaderMenu />
                  <ProfilePicture name="Harry Smith"/>
                  <div className="mobile-menu-open">
                      <ul className="mobile-menu list-unstyled">
                          <li>Message Board</li>
                          <li>Admin</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
