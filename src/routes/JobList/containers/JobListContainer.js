import { connect } from 'react-redux'
import { getJobList, clean, searchJob } from '../actions'

import JobList from '../components/JobList'

const mapDispatchToProps = {
  getJobList,
  clean,
  searchJob
}

const mapStateToProps = (state) => ({
  jobs: state.jobList.jobs,
  isLoading: state.jobList.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(JobList)
