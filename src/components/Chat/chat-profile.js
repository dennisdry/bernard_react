import React from 'react';

import ProfilePicture from './../Profile/profile-picture';

export default class ChatProfile extends React.Component {
  render() {
    return (
      <div className="profile-chat-card row">
        <div className="col-lg-2 chat-profile-picture">
          <ProfilePicture name={this.props.name} size={this.props.size} />
        </div>
        <div className="text-info col-lg-10">
          <h2 className="name">
            {this.props.name}
          </h2>
          <h3 className="company">
            {this.props.company}
          </h3>
          <h4 className="position">
            {this.props.position}
          </h4>
        </div>
      </div>
    );
  }
}
