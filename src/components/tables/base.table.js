import React from 'react'
import {Link} from 'react-router-dom';

class BaseTable extends React.Component {
  render(){
    const {headers, data, entity} = this.props

    return (
      <table className='table custom-table table-responsive-sm'>
        <thead className='thead-dark'>
        <tr className='text-center'>
          {headers.map(h => (
            <th scope='col'>{h}</th>
          ))}
        </tr>
        </thead>
        <tbody className='text-center'>
        {data.map( (item, index) => (
          <tr key={item.id}>
            <th scope='row'>{index+1}</th>
            <td>
              <Link to={`/${entity}/update/${item.id}`} className='h4'>
                <span>{item.name}</span>
                <div className='btn btn-warning'><i className='material-icons'>edit</i></div>
              </Link>
            </td>
            <td>
              <button onClick={() => this.remove(item.id)} className='btn btn-block btn-danger'>
                <i className='material-icons'>delete_outline</i>
              </button>
            </td>
          </tr>
        ))
        }
        </tbody>
      </table>
    )
  }
}

export {BaseTable}
