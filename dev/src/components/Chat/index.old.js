import axios from 'axios';
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React from 'react';

import ChatBox from './chat-box';

export default class ChatList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      objects: [],
      id: '',
      messages: []

    }
  }

  componentDidMount(){
    axios
      .get('http://bernard-api.herokuapp.com/message/findall')
      .then(({ data })=> {
        this.setState({
          objects: data,
          id: data.id,
          messages: data.message
        });
      })
      .catch((err)=> {})
  }

  render() {

    const messagesList = ["msg1", "msg2"]

    return (
      <div className="chat-main">
      {this.state.messages}
          <ChatBox messageContent={messagesList[0]} />
      </div>
    );
  }
}
