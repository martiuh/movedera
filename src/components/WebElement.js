import React from 'react'
import { css } from 'glamor'

const anyBlock = css({
  border: '1px dashed gray',
  ':hover': {
    border: '1px solid lightblue'
  },
  ':focus': {
    border: '1px solid blue'
  }
})

const Paragraph = ({ children, ...props }) => <p {...props} />
const HeadingOne = ({ children, ...props }) => <h1 {...props} />
const Division = ({ children, ...props }) => <div {...props} />

const tags = {
  p: Paragraph,
  h1: HeadingOne,
  div: Division
}

export default class WebElement extends React.Component {
  element = React.createRef()

  render () {
    const { props } = this
    const Element = tags[props.tag] || Division
    const { _onInput, ...properties } = props
    const Props = Object.assign({}, anyBlock, properties)
    Props.onInput = e => _onInput(e, this.element)
    return <Element {...Props} ref={this.element}/>
  }
}
