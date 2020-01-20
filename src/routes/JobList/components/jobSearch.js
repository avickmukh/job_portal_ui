import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row, Card, CardTitle, CardText, Button } from 'reactstrap'

class JobSearch extends Component {
  render () {
    return (
      <Container className="themed-container" fluid={true}>
          <Row>
            <Col sm="12">
            <Card body style={{ padding: '20px', background: 'lightgray' }}>
              <CardTitle><h6>Search</h6></CardTitle>
              <CardText>Please search by Job Type</CardText>
              <Button color="secondary">Search</Button>
            </Card>
            </Col>
            
          </Row>
        </Container>
    )
  }
}
JobSearch.propTypes = {
}

export default JobSearch
