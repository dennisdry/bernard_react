import axios from 'axios';
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React from 'react';
import FlipMove from 'react-flip-move';
import ReactTimeout from 'react-timeout'

import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';



import ChatBox from './chat-box';


class ChatList extends React.Component {
  constructor() {
    super();
    this.state = {items: []}

    this.getMessagesFromApi = this.getMessagesFromApi.bind(this);
  }

  getMessagesFromApi() {
    fetch( 'http://bernard-api.herokuapp.com/message/all' )
    .then( response => response.json() )
    .then( (message) => this.setState({items:message}) )
  }

  componentDidMount() {
    this.getMessagesFromApi();
    setInterval(() => {
      this.getMessagesFromApi();
    }, 5000);
  }


  render() {
    let items = this.state.items
    console.log(this.state.items);
    return (
      <div className="chat-main">
      <FlipMove duration={450} easing="ease-out">
        {items.reverse().map(item =>
              <ChatBox key={item.id} msgId={item.id} messageContent={item.message} />)}
            </FlipMove>
      </div>
    );
  }
}


export default ChatList
