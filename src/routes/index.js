// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout'
import JobList from './JobList'
import JobDetail from './JobDetail'

export const createRoutes = (store) => (
  [
    {
      component: CoreLayout,
      route: JobList(store)
    },
    {
      component: CoreLayout,
      route: JobDetail(store)
    }
  ])

export default createRoutes
