import React from 'react';

export default class ActionBarInteractions extends React.Component {
  constructor(props) {
    super(props);


  }

  repliesNumber() {
    var replies = this.props.replies;

    if (replies > 1) {
      return (
        <span className="comments-number" id="mainchat-comment-1">
          {replies} <span className="hidden-md-down">comments</span>
        </span>
      )
    } else {
      return (
        <span className="comments-number" id="mainchat-comment-1">
          {replies} <span className="hidden-md-down">comment</span>
        </span>
      )
    }
  }


  render() {
    return (
      <div className="col text-right right-actions">
          {this.repliesNumber()}
          <span className="reply-action">
              <span className="text">
                  Reply
              </span>
              <span className="icon"></span>
          </span>
      </div>
    );
  }
}
