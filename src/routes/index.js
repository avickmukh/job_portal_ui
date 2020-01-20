// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout'
import NotFoundLayout from '../layouts/NotFoundLayout'
import JobList from './JobList'
import JobDetail from './JobDetail'
import NotFound from './NotFound'

export const createRoutes = (store) => (
  [
    {
      component: CoreLayout,
      route: JobList(store)
    },
    {
      component: CoreLayout,
      route: JobDetail(store)
    },
    {
      component: NotFoundLayout,
      route: NotFound(store)
    }
  ])

export default createRoutes
