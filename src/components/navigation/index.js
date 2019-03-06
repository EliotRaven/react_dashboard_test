import React from 'react'
import {authAction} from "../../actions";
import connect from "react-redux/es/connect/connect";

class Navigation extends React.Component {
  componentWillMount(){
    this.setState({show: this.props.show})
  }

  logout = (e) => {
    e.preventDefault()
    this.props.dispatch(authAction.logout())
  }

  toggle = (val) => {
    this.props.onShowChange(!val);
  }

  render () {
    let show = this.props.show
    return (
      <nav className="navbar navbar-expand-lg navbar-light text-white">
        <div className="container-fluid">

          <button type="button" id="sidebarCollapse" onClick={() => {this.toggle(show)}} className="btn btn-warning">
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
                <a className="nav-link text-white" href="/" onClick={(e)=>{this.logout(e)}}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionNavigation = connect(mapStateToProps)(Navigation);
export {connectionNavigation as Navigation}