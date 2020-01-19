import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div className=''>
        <div className=''>
            {children}
        </div>
    </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout