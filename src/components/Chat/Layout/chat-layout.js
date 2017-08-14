import React from 'react';

export default class ChatLayout extends React.Component {
  render() {
    return (
      <div className="chat-main">
          <div className="main-chat-card" id="mainchat-1">
              <div className="row">
                  <div className="col-lg-11 col-md-11 col-sm-10 col-xs-10 message-col">
                      <div className="card"></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
