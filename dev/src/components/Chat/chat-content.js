import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class ChatContent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row message-content-row">
        <div className="message-body col-lg-12">
            <ReactMarkdown source={this.props.message} />
        </div>
      </div>
    );
  }
}
