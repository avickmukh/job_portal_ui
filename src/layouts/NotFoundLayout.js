import React from 'react'
import { Container, Row } from 'reactstrap'
import './NotFoundLayout.css'
import PropTypes from 'prop-types'

export const NotFoundLayout = ({ children }) => (
  <Container className='notfound-component'>
    <Row>
      {children}
    </Row>
  </Container>
)

NotFoundLayout.propTypes = {
  children: PropTypes.node,
}

export default NotFoundLayout
