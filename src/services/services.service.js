import API from '../helpers/api'

export const servicesService = {
    index
}

function index() {
    return new Promise((resolve, reject)=>{
        API.call(
          'get',
          'https://t0vbba5oqk.execute-api.us-west-2.amazonaws.com/prod/jazz/services?limit=10&offset=0&status=creation_started,creation_failed,creation_completed,deletion_started,deletion_failed,active,inactive&',
          null,
          null
        ).then(res => {
            return resolve(res.data)
        }).catch(err => {
            sessionStorage.clear()
            return reject(err.response)
        })
    })
}
