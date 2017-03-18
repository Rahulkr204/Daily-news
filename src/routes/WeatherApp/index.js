import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'weather',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const WeatherApp = require('./containers/WeatherAppContainer').default
      const reducer = require('./modules/WeatherAppModule').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'WeatherApp', reducer })

      /*  Return getComponent   */
      cb(null, WeatherApp)

    /* Webpack named bundle   */
  }, 'WeatherApp')
  }
})
