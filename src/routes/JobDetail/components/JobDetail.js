import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { has } from 'lodash'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const JobDetail = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  
  useEffect(() =>{
   props.getJobById(props.jobId)
  },[])

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const jobName = has( props,'job.name') ? props.job.name : ''
  const jobSkill =  has( props,'job.skills') ? props.job.skills : ''
  const jobDesc =  has( props,'job.description') ? props.job.description : ''
  const jobType =  has( props,'job.employment_type') ? props.job.employment_type : ''

  const companyName = has( props,'job.company.name') ? props.job.company.name : ''
  const companyFounded = has( props,'job.company.founded') ? props.job.company.founded : ''
  const companyCeo = has( props,'job.company.ceo') ? props.job.company.ceo : ''
  const companyAbout = has( props,'job.company.about') ? props.job.company.about : ''

  return (
    <div className='detailJob'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Job Detail
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Company Detail
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Col sm="12">
              <Card body>
                <CardTitle>Job Name: {jobName}</CardTitle>
                <CardText>Skill Name : {jobSkill}</CardText>
                <CardText>Description : {jobDesc}</CardText>
                <CardText>Employment Type : {jobType}</CardText>
                <Button color="primary">Apply</Button>
              </Card>
            </Col>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle>Company Name: {companyName}</CardTitle>
                <CardText>Founded : {companyFounded}</CardText>
                <CardText>CEO : {companyCeo}</CardText>
                <CardText>ABout Us : {companyAbout}</CardText>
              </Card>
            </Col>           
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
JobDetail.propTypes = {
  jobId: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
  getJobById: PropTypes.func.isRequired
}

export default JobDetail;