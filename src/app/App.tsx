import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { routePaths } from '../routes'
import newsPage from '../pages/newsLine'
import LandingPage from '../pages/landing'
import separateNews from '../pages/newsLine/components/separateNews'

import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route exact path={routePaths.landing} component={LandingPage} />
      <Route exact path={routePaths.newsLine} component={newsPage} />
      <Route exact path={routePaths.separateNews} component={separateNews} />
    </Router>
  )
}

export default App
