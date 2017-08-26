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
                  <div className="col col-lg-2 hidden-md-down user-profile-wrapper">
                    <div className="user-profile">
                      <ProfilePicture name="Harry Smith" size={65} />
                    </div>
                  </div>
                  </div>
              </div>
          </div>
    );
  }
}
