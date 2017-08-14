import React from 'react';

import ChatBox from './chat-box';
import ChatCompose from './chat-compose';

export default class ChatList extends React.Component {
  render() {
    return (
      <div className="chat-main">
          <ChatCompose />
          <ChatBox />
      </div>
    );
  }
}
