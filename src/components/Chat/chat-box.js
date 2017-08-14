import React from 'react';

import ChatDate from './chat-date';
import ChatContent from './chat-content';
import ChatActionBar from './chat-action-bar';
import ChatProfile from './chat-profile';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div className="main-chat-card" id="mainchat-1">
          <div className="row">
              <div className="col-lg-11 col-md-11 col-sm-10 col-xs-10 message-col">
                  <div className="card">
                    <ChatDate date="2017-08-10 14:01"/>
                    <ChatContent />
                    <ChatActionBar />
                  </div>
              </div>
              <ChatProfile />
          </div>
      </div>
    );
  }
}
