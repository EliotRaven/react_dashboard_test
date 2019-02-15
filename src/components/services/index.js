import React from 'react'
import connect from "react-redux/es/connect/connect";

class Services extends React.Component {
  render () {
    let {services} = this.props.state.service

    return (
      !services.length ? '' : services.map(service => (
        <div key={service.id} className="row no-gutters">
          <div className="col-sm-2">
            id : {service.id}
          </div>
          <div className="col-sm-7">
            links : {service.links.self}
          </div>
          <div className="col-sm-3">
            type : {service.type}
          </div>
        </div>
      ))
    )
  }
}


function mapStateToProps(state) {
  return {state}
}

const connectionServices = connect(mapStateToProps)(Services);
export {connectionServices as Services}