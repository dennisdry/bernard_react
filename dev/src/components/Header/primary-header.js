import React from 'react';

import HeaderLogo from './header-logo'
import HeaderMenu from './header-menu';
import HeaderProfile from './header-profile';

export default class PrimaryHeader extends React.Component {



  render() {
    return (
      <div className="primary">
          <div className="container">
              <div className="row header-row align-items-center">
                  <HeaderLogo />
                  <HeaderMenu />
                  <HeaderProfile numberOfNotifications={1} />
                  </div>
              </div>
          </div>
    );
  }
}
