import React from 'react'
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Sidebar extends React.Component {
  render () {
    let {authUser} = this.props.state.auth
    let show = this.props.show
    return (
      <nav id="sidebar" className={show ? '' : 'active'}>
        <div className="sidebar-header">
          <h3>
            <i className="material-icons fz-50">account_circle</i>
            <span>{ authUser.name } { authUser.surname }</span>
          </h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/roles">Roles</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
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