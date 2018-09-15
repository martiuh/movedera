import React, { Fragment } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { css } from 'glamor'
import 'glamor/reset'

import TopBar from './components/TopBar'
import Editor from './Editor'

const mockMessage = (state = '', action = { }) => {
  const { type, payload } = action
  const stateTree = {
    'TYPE': payload
  }

  return stateTree[payload] || state
}

export default class App extends React.Component {
  state = {
    message: mockMessage()
  }

  render() {
    return (
      <Fragment>
        <TopBar />
        <Editor message='Estático' />
      </Fragment>
    )
  }
}
