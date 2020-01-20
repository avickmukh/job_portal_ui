import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getJobById } from '../actions'

import JobDetail from '../components/JobDetail'

const mapDispatchToProps = {
  getJobById
}

const mapStateToProps = (state, props) => {
  return {
    jobId: props.match.params.id,
    job: state.jobDetail.job
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetail))
