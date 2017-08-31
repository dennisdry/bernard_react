import React from 'react';

export default class ActionBarTags extends React.Component {
  constructor(props) {
    super(props);

    this.deleteMessage = this.deleteMessage.bind(this);
  }


  deleteMessage(){

     fetch(`http://bernard-api.herokuapp.com/message/${this.props.msgId}/delete`, {
      method: 'delete',
     });

    };

  render() {
    //var chatTags = [this.props.tags];

    return (
      <div className="col">
        <span className="tag">
          <a onClick={this.deleteMessage}>delete</a>
        </span>
      </div>
    );
  }
}
