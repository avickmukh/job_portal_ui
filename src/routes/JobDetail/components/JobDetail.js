import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap'
import classnames from 'classnames'
import CompanyDetail from './CompanyDetail';
import JobInfo from './JobInfo'

const JobDetail = (props) => {
  const [activeTab, setActiveTab] = useState('job_tab')

  useEffect(() => {
    props.getJobById(props.jobId)
  }, [])

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div className='detailJob'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'job_tab' })}
            onClick={() => { toggle('job_tab') }}
          >
            Job Detail
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'company_tab' })}
            onClick={() => { toggle('company_tab') }}
          >
            Company Detail
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='job_tab'>
        <Row>
        { props.job.id && <JobInfo job={props.job} /> }
        </Row>
        </TabPane>
        <TabPane tabId='company_tab'>
          <Row>
          { props.job.id && <CompanyDetail job={props.job} /> }
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}
JobDetail.propTypes = {
  jobId: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
  getJobById: PropTypes.func.isRequired
}

export default JobDetail
