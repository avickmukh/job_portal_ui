import React, { Component } from 'react'
import PropTypes from 'prop-types'

class JobDetail extends Component {
  
//   constructor(props){
//     super(props)
//   }

  componentDidMount(){
      this.props.getJobById(this.props.jobId);
  }

  render(){
      return (
              <div className="row no-gutters">
                 JOB Detail COMPONENT
              </div>
      )
  }
}
JobDetail.propTypes = {
  getJobById: PropTypes.func.isRequired,
  jobId: PropTypes.number.isRequired
}

export default JobDetail