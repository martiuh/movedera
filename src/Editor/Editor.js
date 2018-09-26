import React, { Fragment } from 'react'
import { css } from 'glamor'

const editorStyle = css({
  width: '100%',
  height: 'auto',
  border: '1px solid black'
})

const Paragraph = ({ children }) => <p>{children}</p>
const HeadingOne = ({ children }) => <h1>{children}</h1>

const tags = {
  p: Paragraph,
  h1: HeadingOne,
}

export default class Editor extends React.Component {
  state = {
    layout: [
      {
        key: unique(),
        tag: 'h1',
        children: 'Que rica michelada'
      },
      {
        key: unique(),
        tag: 'p',
        children: 'Hola'
      }
    ]
  }

  editor = React.createRef()

  componentDidMount() {
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
      <Fragment>
        {this.state.layout.map(L => {
          const WebElement = tags[L.tag] || div
          return <WebElement {...L} />
        })}
        <iframe
          allowFullScreen
          {...editorStyle}
          ref={this.editor}
        />
      </Fragment>
    )
  }
}
