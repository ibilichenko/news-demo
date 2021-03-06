import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { routePaths } from '../routes'
import DemoPage from '../pages/demo'
import LandingPage from '../pages/landing'

import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route exact path={routePaths.landing} component={LandingPage} />
      <Route path={routePaths.demo} component={DemoPage} />
    </Router>
  )
}

export default App
