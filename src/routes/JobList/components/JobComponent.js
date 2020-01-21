import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const JobComponent = (props) => {
  const { job } = props
  const jobLink = `/job_detail/${job.id}`
  return (
    <Row className='jobClass' key={job.id}>
      <Link to={jobLink}>
        <Col sm='12'>
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
  job: PropTypes.object.isRequired
}
export default JobComponent
