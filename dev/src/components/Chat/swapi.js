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
    fetch( 'https://swapi.co/api/people/' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}) )
  }

  render() {
    let items = this.state.items

    return (
      <div className="chat-main">
        {items.map(item =>
          <Person key={item.name} person={item} />)}
      </div>
    );
  }
}

consts Person = (props) => <h4>{props.person.name}</h4>

export default ChatList
