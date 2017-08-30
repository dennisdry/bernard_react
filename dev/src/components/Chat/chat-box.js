
import React from 'react'
import ReactDOM from 'react-dom'

import ChatDate from './chat-date';
import ChatContent from './chat-content';
import ChatActionBar from './chat-action-bar';
import ChatProfile from './chat-profile';

const myArray = ["1", "2", "3"];

export default class ChatBox extends React.Component {


  render() {
  return (
    <div className="main-chat-card">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="row top-row">
                      <div className="col-lg-6">
                        <ChatProfile name="Harry Smith" company="Weener Berger" position="Weener tester" size={50} />
                      </div>
                      <div className="col-lg-6 text-right">
                        <ChatDate date="2017-08-26 14:01"/>
                      </div>
                  </div>

                  <ChatContent message={this.props.messageContent} />
                  <ChatActionBar />
                </div>
            </div>
        </div>
    </div>


  );
  }
}
