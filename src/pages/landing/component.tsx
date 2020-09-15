import React from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../routes'

const LandingPage = () => {
  return (
      <div>
          <span>
            We need to figure out structure of our app. Here a{' '}
            <Link to={routePaths.demo}>example</Link>
          </span>
      </div>
  )
}

export default LandingPage
