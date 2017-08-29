import React from 'react';
import ProfilePicture from './../Profile/profile-picture';
//import NotificationMessage from './../Notifications/notification-message';

export default class HeaderProfile extends React.Component {
// constructor(props) {
//   super(props)
//   this.state = {
//     notifications: this.props.numberOfNotifications
//   }
//
//   this.numberOfNotifications = this.numberOfNotifications.bind(this);
//
// }
//
// numberOfNotifications() {
//   var notificationNumber = this.props.numberOfNotifications
//
//   if (notificationNumber > 0) {
//     return (
//       <NotificationMessage />
//     );
//   }
//
//   console.log(notificationNumber);
// }

  render() {
    return (
      <div className="col col-lg-2 hidden-md-down user-profile-wrapper">
        <div className="user-profile">
          <ProfilePicture name="Harry Smith" size={65}  />
        </div>
      </div>
    );
  }
}
