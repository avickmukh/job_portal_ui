import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Card, CardTitle, CardText, Button,
  CardSubtitle } from 'reactstrap'
import { Link } from "react-router-dom";
import JobSearch from './jobSearch'
import Styled from 'styled-components'
import JobComponent from './JobComponent';

class JobList extends Component {
//   constructor(props){
//     super(props)
//   }

  componentDidMount () {
    this.props.getJobList()
  }

  render () {
    const jobListView = this.props.jobs.map((job)=>{
        return(<JobComponent job={job} />)
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
