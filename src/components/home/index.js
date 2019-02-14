import React from 'react'
import { connect } from 'react-redux'
import {authAction, serviceAction} from "../../actions";
import {Service} from '../service'
import {Services} from '../services'
import {Link, Route} from 'react-router-dom'

class Home extends React.Component {
    state = {
        show: true
    }

    componentWillMount(){
        this.props.dispatch(serviceAction.getServices())
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    logout = (e) => {
      e.preventDefault()
      this.props.dispatch(authAction.logout())
    }

    render () {
        let {username} = this.props.state.auth.authUser.input
        let {loading} = this.props.state.service
        let services = (this.props.state.service.data) ? this.props.state.service.data.data.services : []

      return (
        <div className="home">
          <div className="wrapper">
            <nav id="sidebar" className={this.state.show ? '' : 'active'}>
              <div className="sidebar-header">
                <h3>{ username }</h3>
              </div>

              <ul className="list-unstyled components">
                <li>
                  <Link to="/">All</Link>
                </li>
                {loading
                  ?
                  <li className="text-center">
                    <i className="fa fa-spinner fa-spin" />
                  </li>
                  :
                  !services.length ? '' : services.map(service => (
                    <li key={service.id}>
                      <Link to={`/${service.id}`}>{service.service}</Link>
                    </li>
                  ))}
              </ul>
            </nav>

            <div id="content">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" onClick={() => {this.toggle()}} className="btn btn-info">
                        <i className="fas fa-align-left" />
                        <span> Toggle Sidebar</span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="fas fa-align-justify" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={(e)=>{this.logout(e)}}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
              </nav>

              <Route path="/:id" component={Service} />
              <Route path="/" component={Services} />

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