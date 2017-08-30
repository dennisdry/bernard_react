import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Editor from './chat-editor';

export default class ChatCompose extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }


  render() {
    return(
      <div className="ChatCompose">
        <button className="write-new" onClick={this.toggle}></button>
        <Modal wrapClassName="ModalWrite-wrapper" isOpen={this.state.modal} toggle={this.toggle} className="WriteNewModal">
            <ModalHeader toggle={this.toggle}>Write a new message</ModalHeader>
            <ModalBody>
              <Editor placeholder={'Write your message here'} />
            </ModalBody>
            <ModalFooter className="WriteNewModal-footer">
              <Button className="WriteNewModal-footer-submit" onClick={this.toggle}>Submit</Button>{' '}
            </ModalFooter>
          </Modal>
      </div>
    );
  }
}
