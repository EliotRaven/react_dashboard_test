import api from '../helpers/api'
import {BaseService} from "./base.service";

class ArticleService extends BaseService {
  index(query) {
    return new Promise((resolve, reject)=>{
      return api.call('get', '/article/user/authors', query)
        .then(articles => resolve(articles.data))
        .catch(error => reject(error.response))
    })
  }

  list(query) {
    return new Promise((resolve, reject)=>{
      return api.call('get', '/article', query)
        .then(articles => resolve(articles.data))
        .catch(error => reject(error.response))
    })
  }
}

export default new ArticleService()

