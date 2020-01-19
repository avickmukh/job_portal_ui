import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.css'
import App from './components/App'

import { createStore } from './store/createStore'
const store = createStore(window.__INITIAL_STATE__)

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE,
  )
}

render()
