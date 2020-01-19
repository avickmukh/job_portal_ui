import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import asyncComponent from './AsyncComponent'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store, routes } = this.props
    const Routes = routes.map((childRoute, index) => {
      const RouteTemp = childRoute.route
      const ComponentComp = asyncComponent(RouteTemp.getComponent)
      return (<Route
        path={RouteTemp.path}
        key={RouteTemp.path}
        exact
        render={props => (
          <childRoute.component>
            <ComponentComp {...props} />
          </childRoute.component>
                )}
                />)
    })

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {Routes}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
