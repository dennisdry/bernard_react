import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, Raw, Plain } from 'slate';

const initialContent = ''

// Define a React component renderer for our code blocks.
function CodeNode(props) {
  return <pre {...props.attributes}><code>{props.children}</code></pre>
}

class Slate extends React.Component {
  constructor(props) {
    super(props);

    this.postContent = this.postContent.bind(this);

  }

  // Set the initial state when the app is first constructed.
  state = {
    state: Plain.deserialize(initialContent),

    schema: {
      nodes: {
        code: CodeNode
      },
      // Add our "bold" mark to the schema...
      marks: {
        bold: BoldMark
      }
    }
  }

  // Define a React component to render bold text with.
  function BoldMark(props) {
    return <strong>{props.children}</strong>
  }

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    this.setState({ state })

    // Save the state to Local Storage.
    const content = Plain.serialize(state)
    localStorage.setItem('content', content)
    console.log(content)
  }


  postContent() {
      fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {content}
      })
    })
  }


  // Render the editor.
  render() {

    return (
      <Editor
        state={this.state.state}
        onChange={this.onChange}
      />
    )
  }

}

export default Slate;
