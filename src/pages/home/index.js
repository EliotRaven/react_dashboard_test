import React from 'react'
import { connect } from 'react-redux'
import { Main } from '../../pages/main'
import {Route} from 'react-router-dom'

import { Sidebar } from "../../components/sidebar";
import { Navigation } from "../../components/navigation";
import { Typography } from "../typography";
import { Forms } from "../forms";

class Home extends React.Component {
  state = {
    show: true
  }

  toggle = (val) => {
    this.setState({show: val})
  }

  render () {
    return (
      <div className="home">
        <div className="wrapper">
          <Sidebar show={this.state.show} />
          <div id="content">
            <Navigation show={this.state.show} onShowChange={this.toggle} />
            <Route exact path="/" component={Main} />
            <Route path="/typography" component={Typography} />
            <Route path="/forms" component={Forms} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionHome = connect(mapStateToProps)(Home);
export {connectionHome as Home}