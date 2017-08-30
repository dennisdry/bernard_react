import axios from 'axios';
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React from 'react';
import FlipMove from 'react-flip-move';

import ChatBox from './chat-box';

class ChatList extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }

  componentWillMount() {
    fetch( 'http://bernard-api.herokuapp.com/message/findall' )
    .then( response => response.json() )
    .then( (message) => this.setState({items:message}) )
  }

  render() {
    let items = this.state.items
    console.log(items[0]);
    return (
      <div className="chat-main">
        {items.map(item =>

            <ChatBox key={item.message} messageContent={item.message} />)}

      </div>
    );
  }
}


export default ChatList
