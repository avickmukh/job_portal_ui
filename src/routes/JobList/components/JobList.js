import React, { Component } from 'react'
import PropTypes from 'prop-types'

class JobList extends Component {
  
//   constructor(props){
//     super(props)
//   }

  componentDidMount(){
      this.props.getJobList();
  }

  render(){
      return (
              <div className="row no-gutters">
                 JOB LIST COMPONENT
              </div>
      )
  }
}
JobList.propTypes = {
  getJobList: PropTypes.func.isRequired,
}

export default JobList