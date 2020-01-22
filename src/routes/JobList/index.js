import { injectReducer } from '../../store/reducers'
import { injectSaga } from '../../store/createStore'
import saga from './saga'

export default (store) => ({
  path:'/joblist',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    // eslint-disable-next-line no-restricted-properties
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const jobList = require('./containers/JobListContainer').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'jobList', reducer })
      injectSaga(saga)
      /*  Return getComponent   */
      cb(null, jobList)

    /* Webpack named bundle   */
    }, 'jobList')
  }
})
