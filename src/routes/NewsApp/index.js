import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'news',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewsApp = require('./containers/NewsAppContainer').default
      const reducer = require('./modules/NewsAppModule').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'NewsApp', reducer })

      /*  Return getComponent   */
      cb(null, NewsApp)

    /* Webpack named bundle   */
    }, 'NewsApp')
  }
})
