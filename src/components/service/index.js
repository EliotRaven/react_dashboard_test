import React from 'react'
import connect from "react-redux/es/connect/connect";

class Service extends React.Component {

  checkData = (props) => {
    return (typeof props === 'object') ?
      (<ul>
        {Object.keys(props).map((k)=>(
        <li key={k}>
          {k} : {(props[k] !== null && props[k] !== undefined) ? this.checkData(props[k]) : 'Empty field'}
        </li>
        ))}
      </ul>)
      : props
  }

  render () {
    let service = (this.props.state.service.services) ? this.props.state.service.services.find(s => s.id === this.props.match.params.id) : {}
    return (
      !service ? '' :
      <ul>
        {Object.keys(service).map((k)=>(
          <li key={k}>
            {k} : {(service[k] !== null && service[k] !== undefined) ? this.checkData(service[k]) : 'Empty field'}
          </li>
        ))}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  return {state}
}

const connectionService = connect(mapStateToProps)(Service);
export {connectionService as Service}