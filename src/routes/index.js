// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import NewsAppRoute from './NewsApp'
import ProjectsRoute from './Projects'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    NewsAppRoute(store),
    ProjectsRoute(store)
  ]
})


export default createRoutes
