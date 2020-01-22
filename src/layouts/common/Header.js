import React from 'react'
import logo from './logo.svg'
import './HeaderFooter.css'

const Header = () => {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h3 style={{ float: 'right', margin: '22px', fontFamily: 'auto' }}>MY DREAM JOB</h3>
      </header>
    </div>
  )
}

export default Header
