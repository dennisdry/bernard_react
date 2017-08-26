import React from 'react';

import ChatList from './components/Chat/index';
import ChatCompose from './components/Chat/chat-compose';

export default class MainContent extends React.Component {
  render() {
    return (
      <main>
      <ChatCompose />
      <div className="container">
        <ChatList />
      </div>
      </main>
    );
  }
}
