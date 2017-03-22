import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'exzeo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Exzeo = require('./containers/ExzeoContainer').default
      const reducer = require('./modules/ExzeoModule').default
      injectReducer(store, { key: 'Exzeo', reducer })
      cb(null, Exzeo)
    }, 'Exzeo')
  }
})
