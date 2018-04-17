import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

// data.gov.in API key : 94d9924a23e414a0f552ecfde1428fe9


export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
