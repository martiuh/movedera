import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
const appRoot = document.getElementById('app')

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  appRoot
)
