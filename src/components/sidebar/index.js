import React from 'react'
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Sidebar extends React.Component {
  render () {
    let {username} = this.props.state.auth.authUser
    let show = this.props.show
    return (
      <nav id="sidebar" className={show ? '' : 'active'}>
        <div className="sidebar-header">
          <h3>
            <i className="material-icons fz-50">account_circle</i>
            <span>{ username }</span>
          </h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/">Home</Link>
            <Link to="/typography">Typography</Link>
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionSidebar = connect(mapStateToProps)(Sidebar);
export {connectionSidebar as Sidebar}