import React from 'react';

export default class ActionBarTags extends React.Component {
  render() {
    var chatTags = [this.props.tags];

    return (
      <div className="col">
        <span className="tag">
            {chatTags}
        </span>
      </div>
    );
  }
}
