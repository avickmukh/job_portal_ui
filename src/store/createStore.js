import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
const createHistory = require("history").createBrowserHistory;
import makeRootReducer from './reducers'
import { updateLocation } from './location'

const sagaMiddleware = createSagaMiddleware()

export const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

//   if (__DEV__) {
//     if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
//       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     }
//   }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  const browserHistory = createHistory()
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
const sagas = []
export const injectSaga = (saga) => {
  if(sagas.indexOf(saga) === -1) {
    sagas.push(saga)
    sagaMiddleware.run(saga)
  }
}