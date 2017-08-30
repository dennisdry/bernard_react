import React from 'react';

export default class ChatContent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row message-content-row">
        <div className="message-body col-lg-12">
            {this.props.message}
        </div>
      </div>
    );
  }
}
