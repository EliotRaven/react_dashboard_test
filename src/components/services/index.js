import React from 'react'
import connect from "react-redux/es/connect/connect";

class Services extends React.Component {
  render () {
    let services = (this.props.state.service.data) ? this.props.state.service.data.data.services : []
    return (
      !services.length ? '' : services.map(service => (
        <div key={service.id} className="container">
          <div className="row">
            <div className="col-sm">
              domain : {service.domain}
            </div>
            <div className="col-sm">
              service : {service.service}
            </div>
            <div className="col-sm">
              status : {service.status}
            </div>
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