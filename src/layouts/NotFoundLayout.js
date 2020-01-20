import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Container, Row, Col } from 'reactstrap'

import PropTypes from 'prop-types'

export const NotFoundLayout = ({ children }) => (
  <Container>
    <Row>NOT Found
    </Row>
  </Container>
)

NotFoundLayout.propTypes = {
  children: PropTypes.node,
}

export default NotFoundLayout
