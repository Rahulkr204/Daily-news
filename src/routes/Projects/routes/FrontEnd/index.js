import { injectReducer } from 'store/reducers'
import exzeoRoute from './routes/Exzeo'


export default (store) => ({
  path : 'front',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const FrontEnd = require('./containers/FrontEndContainer').default
      const reducer = require('./modules/FrontEndModule').default
      injectReducer(store, { key: 'FrontEnd', reducer })
      cb(null, FrontEnd)
    }, 'FrontEnd')
  },
  childRoutes:[
    exzeoRoute(store)
  ]
})
