import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import {history} from "./helpers"
import { authAction } from "./actions";
import { connect } from 'react-redux'

import {Home} from './pages/home'
import {Login} from './pages/login'

class App extends Component {
  componentWillMount () {
    this.props.dispatch(authAction.checkAuth())
  }

  render() {
    const {isAuth} = this.props.state.auth

    return (
      <Router history={history}>
        <Route render={({location}) => (
          <div className="App">
            <Switch location={location}>
              {isAuth
                ?
                <Route path='/' component={Home} />
                :
                <Route component={Login} />
              }
            </Switch>
          </div>
        )} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
    return {state};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };