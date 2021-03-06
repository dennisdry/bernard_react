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
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="card">
                    <div className="row top-row">
                        <div className="col-lg-6">
                          <ChatProfile name="Harry Smith" company="CodeCool" position="Mentor" size={50} />
                        </div>
                        <div className="col-lg-6 text-right">
                          <ChatDate date="2017-08-26 14:01"/>
                        </div>
                    </div>
                    <ChatContent />
                    <ChatActionBar />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
