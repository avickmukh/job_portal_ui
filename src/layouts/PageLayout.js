import React from 'react'
import PropTypes from 'prop-types'
import Header from './common/Header'

export const PageLayout = ({ children }) => (
  <div className=''>
    <Header />
    <div className=''>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
