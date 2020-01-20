import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import Header from './common/Header'
import './PageLayout.css'

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <Container className="themed-container" fluid={true} style={{ backgroundColor: '#F4F4F4', minHeight: '600px', paddingTop: '10px' }}>
      {children}
    </Container>
  </>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
