import { injectReducer } from 'store/reducers'
import frontEndRoute from './routes/FrontEnd'

export default (store) => ({
  path : 'projects',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Projects = require('./containers/ProjectsContainer').default
      const reducer = require('./modules/ProjectsModule').default
      injectReducer(store, { key: 'Projects', reducer })
      cb(null, Projects)

    }, 'Projects')
  },
  childRoutes:[
    frontEndRoute(store)
  ]
})
