import React from 'react';

import ProfilePicture from './../Profile/profile-picture';

export default class ChatProfile extends React.Component {
  render() {
    return (
      <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2 profile-col">
          <div className="profile">
              <ProfilePicture name="Harry Smith"/>
          </div>
      </div>
    );
  }
}
