import React, { Fragment } from 'react'
import 'glamor/reset'

import TopBar from './components/TopBar'

export default class App extends React.Component {
  state = {
    saludo: 'Salu2 Lokuazos'
  }

  render() {
    const { saludo } = this.state
    return (
      <Fragment>
        <TopBar />
        <h1>{saludo}</h1>
      </Fragment>
    )
  }
}
