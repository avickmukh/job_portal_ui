import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { Col, Container, Row, Card, Button, FormGroup } from 'reactstrap'

const StyledCard = styled(Card)`
padding: 20px;
background: lightgray; 
text-align: right;
`
const JobSearch = props => {
  const searchJob = (data) => {
    props.searchJob(data)
  }
  const resetData = () => {
    props.reset()
    props.getJobList()
  }
  const { handleSubmit, pristine, submitting } = props
  return (
    <Container className='themed-container' fluid>
      <Row>
        <Col sm='12'>
          <StyledCard body>
            <form className='form-inline' onSubmit={handleSubmit(searchJob)}>
              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Field
                  name='skill'
                  component='input'
                  type='text'
                  placeholder='Skills'
                  className='form-control'
                />
                {/* <Input type="text" name="skill" id="jobSkill" placeholder="Skill" /> */}
              </FormGroup>
              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Field name='employment_type' component='select' className='form-control'>
                  <option />
                  <option value='full time'>Full Time</option>
                  <option value='contract'>Contract</option>
                </Field>
              </FormGroup>
              <Button type='submit' disabled={pristine || submitting}>Search</Button>
              <Button type='button' onClick={resetData}>Reset</Button>
            </form>
          </StyledCard>
        </Col>

      </Row>
    </Container>
  )
}

JobSearch.propTypes = {
  getJobList: PropTypes.func.isRequired,
  searchJob: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit:  PropTypes.func.isRequired,
  reset:PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'jobSearchForm'
})(JobSearch)
