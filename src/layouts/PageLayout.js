import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import {NotificationContainer } from 'react-notifications';

import Header from './common/Header'
import './PageLayout.css'

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <Container className='themed-container' fluid style={{ backgroundColor: '#F4F4F4', minHeight: '600px', paddingTop: '10px' }}>
      {children}
      <NotificationContainer/>
    </Container>
  </>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
