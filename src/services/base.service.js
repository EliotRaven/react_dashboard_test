import api from '../helpers/api'

class BaseService {
  index(entity, query) {
    return new Promise((resolve, reject)=>{
      return api.call('get', `/${entity}`, query)
        .then(res => resolve(res.data))
        .catch(error => reject(error.response))
    })
  }

  show(entity, id) {
    return new Promise((resolve, reject)=>{
      return api.call('get', `/${entity}/${id}`)
        .then(res => resolve(res.data))
        .catch(error => reject(error.response))
    })
  }

  create(entity, data) {
    return new Promise((resolve, reject)=>{
      return api.call('post', `/${entity}`, null, data)
        .then(res => resolve(res.data))
        .catch(error => reject(error.response))
    })
  }

  update(entity, id, data) {
    return new Promise((resolve, reject)=>{
      return api.call('put', `/${entity}/${id}`, null, data)
        .then(res => resolve(res.data))
        .catch(error => reject(error.response))
    })
  }

  remove(entity, id) {
    return new Promise((resolve, reject)=>{
      return api.call('delete', `/${entity}/${id}`)
        .then(res => resolve(res.data))
        .catch(error => reject(error.response))
    })
  }
}

export {BaseService}
