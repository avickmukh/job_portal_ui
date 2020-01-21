import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Col, Container, Row, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap'

// class JobSearch extends Component {
//   render () {
//     return (
//       <Container className="themed-container" fluid={true}>
//           <Row>
//             <Col sm="12">
//             <Card body style={{ padding: '20px', background: 'lightgray' }}>
//               <CardTitle><h6>Search</h6></CardTitle>
//               <CardText>Please search by Job Type</CardText>
//               <Button color="secondary">Search</Button>
//             </Card>
//             </Col>
            
//           </Row>
//         </Container>
//     )
//   }
// }
// JobSearch.propTypes = {
// }

// export default JobSearch

const JobSearch = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Container className="themed-container" fluid={true}>
          <Row>
            <Col sm="12">
            <Card body style={{ padding: '20px', background: 'lightgray' }}>
            <form className='form-inline' onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Field
                  name="skill"
                  component="input"
                  type="text"
                  placeholder="Skills"
                />
                  {/* <Input type="text" name="skill" id="jobSkill" placeholder="Skill" /> */}
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
                </FormGroup>
                <Button type="submit" disabled={pristine || submitting}>Search</Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
              </form>
            </Card>
            </Col>
            
          </Row>
    </Container>
  )
}

export default reduxForm({
  form: 'jobSearchForm' 
})(JobSearch)