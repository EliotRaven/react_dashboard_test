import {BaseService} from './base.service';
import api from "../helpers/api";

class UserService extends BaseService {
  index(query) {
    return new Promise((resolve, reject)=>{
      return api.call('get', '/user/', query)
        .then(users => resolve(users.data))
        .catch(error => reject(error.response))
    })
  }
}

export default new UserService()

