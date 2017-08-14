import React from 'react';

import ChatList from './components/Chat/index';

export default class MainContent extends React.Component {
  render() {
    return (
      <main>
      <div className="container">
        <ChatList />
      </div>
      </main>
    );
  }
}
