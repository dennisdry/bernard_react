import React from 'react';

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <nav className="col col-7 text-right menu hidden-md-down">
          <ul className="main-menu list-unstyled">
              <li className="active">
                Messageboard
              </li>
              <li>
                Management
              </li>
              <li>
                Settings
              </li>
          </ul>
      </nav>
    );
  }
}
