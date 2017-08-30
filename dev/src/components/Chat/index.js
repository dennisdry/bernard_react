import axios from 'axios';
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React from 'react';

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
          <Person key={item.message} person={item} />)}
      </div>
    );
  }
}

const Person = (props) => <h4>{props.person.message}</h4>


export default ChatList
