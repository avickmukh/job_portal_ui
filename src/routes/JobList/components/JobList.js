import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Card, CardTitle, CardText, Button,
  CardSubtitle } from 'reactstrap'
import { Link } from "react-router-dom";
import JobSearch from './jobSearch'
import JobDetail from '../../JobDetail';

class JobList extends Component {
//   constructor(props){
//     super(props)
//   }

  componentDidMount () {
    this.props.getJobList()
  }

  render () {
    const jobListView = this.props.jobs.map((job)=>{
      const jobLink = "/job_detail/"+job.id
        return(
        
          <Row className='jobClass' key={job.id}>
          <Link to={jobLink}>
          <Col sm="12">
            <Card body style={{ padding: '20px' }}>
              <CardTitle><h5>{job.title}</h5></CardTitle>
              <CardSubtitle><h6>{job.company.name} |  {job.employment_type} </h6></CardSubtitle>
              <CardSubtitle><h6>{job.location}</h6></CardSubtitle>
              <CardText>Skills: {job.skills}</CardText>
            </Card>
          </Col>
          </Link>
        </Row>)
    })
    return (
      <Container className="themed-container" fluid={true}>
        <Row>
          <JobSearch />
        </Row>
        <Row>
          <Container className="themed-container" fluid={true}>
            { jobListView }
          </Container>
        </Row>
  </Container>
    )
  }
}
JobList.propTypes = {
  getJobList: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
}

export default JobList
