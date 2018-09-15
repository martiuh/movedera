import React from 'react'
import { css } from 'glamor'

const editorStyle = css({
  width: '100%',
  height: 'auto',
  border: '1px solid black'
})

export default class Editor extends React.Component {
  editor = React.createRef()

  componentDidMount() {
    this.editor.current.addEventListener('load', () => alert('Listo'))
    console.log(this.editor.onload)
    const doc = this.getEditor()
    doc.head.innerHTML = `
      <style>
        h1:hover {
          border: 1px solid blue;
        }

        body {
          background-color: red;
          color: white;
        }
      </style>
    `
    doc.body.innerHTML = `<h1>${this.props.message}</h1>`
  }

  getEditor = () => this.editor.current.contentDocument
  render () {
    return (
      <iframe
        allowFullScreen
        {...editorStyle}
        ref={this.editor}
      />
    )
  }
}
