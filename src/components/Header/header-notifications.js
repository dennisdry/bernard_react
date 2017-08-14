import React from 'react';

export default class HeaderNotifications extends React.Component {
  render() {
    return (
      <div className="col">
          <div className="upcoming-events text-right">
              <div className="new-notification">
                  <a href="#">
                      <span className="text">
                      1 new notification
                  </span>
                      <span className="icon"></span>
                  </a>
              </div>
          </div>
      </div>
    );
  }
}
