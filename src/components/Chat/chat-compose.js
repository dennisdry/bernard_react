import React from 'react';

export default class ChatCompose extends React.Component {
  render() {
    return(
      <div className="row">
          <div className="col text-center">
              <button className="write-new main-button mx-auto" data-toggle="modal" data-target="#myModal">
                  Write a New Message
              </button>
          </div>
      </div>
    );
  }
}
