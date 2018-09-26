import React, { Fragment } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { css } from 'glamor'
import 'glamor/reset'

import TopBar from './components/TopBar'
import WebElement from './components/WebElement'
import Editor from './Editor'

const unique = () => Math.round((Math.random() * 36 ** 12)).toString(36)

const mockMessage = (state = '', action = { }) => {
  const { type, payload } = action
  const stateTree = {
    'TYPE': payload
  }

  return stateTree[payload] || state
}

export default class App extends React.Component {
  state = {
    layout: [
      {
        key: unique(),
        tag: 'h1',
        html: 'H1'
      },
      {
        key: unique(),
        tag: 'p',
        html: 'P'
      }
    ]
  }

  canEdit = (index, bool = true) => {
    this.setState(prev => {
      const { layout } = prev
      const el = layout[index]

      layout[index] = {
        ...el,
        contentEditable: bool
      }
      return layout
    })
  }

  changeInput = (index, value) => {
    this.setState(prev => {
      const { layout } = prev
      const el = layout[index]

      layout[index] = {
        ...el,
        html: value
      }
      return layout
    })
  }

  render() {
    const { layout } = this.state
    return (
      <Fragment>
        <TopBar />
        <h1
          draggable
        >
          Hola a todos</h1>
        {layout.map((L, index) => {
          const Props = L
          Props.tabIndex = "0"
          Props.onClick = () => this.canEdit(index, true)
          Props.onBlur = () => this.canEdit(index, false)
          Props._onInput = (e, ref) => {
            const { current } = ref
            this.changeInput(index, e.target.innerText)
            // console.log(e.target.innerText)
            // console.log(e.target.innerHTML)
          }
          Props.dangerouslySetInnerHTML = { __html: Props.html }
          return <WebElement {...Props} />
        })}
      </Fragment>
    )
  }
}
