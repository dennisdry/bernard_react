import axios from 'axios';
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React from 'react'
import ReactDOM from 'react-dom'

const myArray = ["1", "2", "3"];

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ,
      message: '',
      messageType: [
        name: ''
      ],
      tags: [
        name: '',
        tagtype: [
          name: ''
        ]
      ]
    }
  }

  componentDidMount(){
    axios
      .get('http://bernard-api.herokuapp.com/message/1')
      .then(({ data })=> {
      	this.setState({
          id: data.id,
          message: data.message,
          tags: [
            name: data.tags.name
          ]

        });
      })
      .catch((err)=> {})

      console.log(myArray);
  }

  render() {

    const numbers = ["1", "2", "3"];
    const listItems = numbers.map((number) =>
    <li key={number}>
      {number}
    </li>
  );
  return (
    <div>
      <ul>{listItems}</ul>
      { this.state.message }
    </div>
  );
  }
}
