import React from 'react';
// import { render } from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css';
import App from './components/App';

import { createStore } from './store/createStore'
const store = createStore(window.__INITIAL_STATE__)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE,
  )
}

render()