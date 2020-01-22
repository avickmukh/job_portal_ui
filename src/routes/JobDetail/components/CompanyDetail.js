import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

const CompanyDetail = (props) => {
  return (
    <Col sm='12'>
      <Card body className='companyInfoClass'>
        <CardTitle>Company Name: {props.job.company.name}</CardTitle>
        <CardText>Founded : {props.job.company.founded}</CardText>
        <CardText>CEO : {props.job.company.ceo}</CardText>
        <CardText>ABout Us : {props.job.company.about}</CardText>
      </Card>
    </Col>
  )
}
CompanyDetail.propTypes = {
  job: PropTypes.object.isRequired
}

export default CompanyDetail
