import React from 'react';

import ChatBox from './chat-box';

export default class ChatList extends React.Component {
  render() {
    return (
      <div className="chat-main">
          <ChatBox />
      </div>
    );
  }
}
