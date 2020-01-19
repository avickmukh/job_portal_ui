import { injectReducer } from '../../store/reducers'


export default (store) => ({
  path:'/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    // eslint-disable-next-line no-restricted-properties
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const joblist = require('./containers/JobListContainer').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'joblist', reducer })

      /*  Return getComponent   */
      cb(null, joblist)

    /* Webpack named bundle   */
    }, 'joblist')
  }
})