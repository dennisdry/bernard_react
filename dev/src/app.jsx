import React from 'react';
import '../styles/index.scss';

import Header from './components/Header/index';
import MainContent from './main.jsx';
import Footer from './components/Footer/index';

import ChatBox from './containers/chat_box';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ChatBox />
        <Header />
        <ChatBox />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
