import { connect } from 'react-redux'
import { getJobById } from '../actions'

import JobDetail from '../components/JobDetail'

const mapDispatchToProps = {
    getJobById
}

const mapStateToProps = (state, props) => {
    return{
       jobId: props.match.params.id
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobDetail)