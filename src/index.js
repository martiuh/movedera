import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const appRoot = document.getElementById('app')

const render = Compo => (
  ReactDOM.render(
    <AppContainer>
      <Compo />
    </AppContainer>,
    appRoot
  )
)

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  const App = require('./App').default
  render(App)
}
