import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap'
import { Link } from "react-router-dom"

const JobComponent = (props) =>{
    const { job }= props
    const jobLink = `/job_detail/${job.id}`
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
  </Row>
 )
}
JobComponent.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.any([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    employment_type: PropTypes.string,
    location:PropTypes.string,
    skills: PropTypes.string,
    company: PropTypes.shape({name: PropTypes.string})
  })
}

JobComponent.defaultProps = {
  job: PropTypes.shape({
    id: 0,
    title: '',
    employment_type: '',
    location:'',
    skills: '',
    company: PropTypes.shape({name: ''})
  })
}

export default JobComponent