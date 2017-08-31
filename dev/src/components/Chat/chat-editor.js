import React from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

/*
 * Custom "star" icon for the toolbar using an Octicon
 * https://octicons.github.io
 */
const CustomButton = () => <span className="octicon octicon-star" />

/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-link"></button>
  </div>
)

/*
 * Editor component with custom toolbar and content containers
 */
export default class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
  	this.setState({ editorHtml: html });
  }

  render() {


    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"}
        >
          <div
            key="editor"
            ref="editor"
            className="quill-contents"
          />
        </ReactQuill>
      </div>
    )
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: {
    container: "#toolbar"
  }
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: React.PropTypes.string,
}
