import React, {PropTypes} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RichTextEditor from 'react-rte';
import ChatList from './index';

import RTEditor from './chat-rte';

export default class ChatCompose extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        value: RichTextEditor.createEmptyValue()
      };

      this.toggle = this.toggle.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.postData = this.postData.bind(this)
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    onChange = (value) => {
      this.setState({value});
      if (this.props.onChange) {
        // Send the changes up to the parent component as an HTML string.
        // This is here to demonstrate using `.toString()` but in a real app it
        // would be better to avoid generating a string on each change.
        this.props.onChange(
          value.toString('html')
        );
      }
    };



    handleSubmit(){
      const sendBodyContent = JSON.stringify({message: this.state.value.toString('html')})
       fetch('http://bernard-api.herokuapp.com/message/send', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: sendBodyContent
       });

      };


    postData() {
      this.handleSubmit();
      this.toggle();
    }


  render() {

    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
          {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
          {label: 'Italic', style: 'ITALIC'},
          {label: 'Underline', style: 'UNDERLINE'}
        ],
        BLOCK_TYPE_BUTTONS: [
          {label: 'UL', style: 'unordered-list-item'},
          {label: 'OL', style: 'ordered-list-item'}
        ]
      };

    return(
      <div className="ChatCompose">
        <button className="write-new" onClick={this.toggle}></button>
        <Modal wrapClassName="ModalWrite-wrapper" isOpen={this.state.modal} toggle={this.toggle} className="WriteNewModal">
            <ModalHeader toggle={this.toggle}>Write a new message</ModalHeader>
            <ModalBody>
            <RichTextEditor
              className="RTEWrap"
              value={this.state.value}
              onChange={this.onChange}
              toolbarConfig={toolbarConfig}
              autoFocus={true}
              placeholder="Covfefe"
            />
            </ModalBody>
            <ModalFooter className="WriteNewModal-footer">
              <Button onClick={this.postData} className="WriteNewModal-footer-submit">Submit</Button>{' '}
            </ModalFooter>
          </Modal>
      </div>
    );
  }
}
