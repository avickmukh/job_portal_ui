import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'reactstrap'
import JobSearch from './jobSearch'
import JobComponent from './JobComponent'

class JobList extends Component {
//   constructor(props){
//     super(props)
//   }

  componentDidMount () {
    this.props.getJobList()
  }

  componentWillUnMount () {
    this.props.clean()
  }

  render () {
    const jobListView = this.props.jobs.map((job) => <JobComponent key={job.id} job={job} />)
    const initialSearchedVal = {
      skill: '',
      employment_type:''
    }
    return (
      <Container className='themed-container' fluid>
        <Row>
          <JobSearch
            searchJob={this.props.searchJob}
            getJobList={this.props.getJobList}
            initialValues={initialSearchedVal}
          />
        </Row>
        <Row>
          <Container className='themed-container' fluid>
            {jobListView}
          </Container>
        </Row>
      </Container>
    )
  }
}
JobList.propTypes = {
  getJobList: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired,
  clean:PropTypes.func.isRequired,
  searchJob: PropTypes.func.isRequired,
}

export default JobList
