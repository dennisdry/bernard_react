import React from 'react';
import NotificationSystem from 'react-notification-system';

export default class NotificationMessage extends React.Component {
  constructor(props) {
    super(props);

    this.addNotification = this.addNotification.bind(this);
  }

  addNotification(event) {
    event.preventDefault();
      this._notificationSystem.addNotification({
        message: 'Notification message',
        level: 'success'
      });
  }

  render() {
    return (
      <NotificationSystem ref="notificationSystem" />

    );
  }
}
