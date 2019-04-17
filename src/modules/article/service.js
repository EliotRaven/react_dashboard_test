import api from '../../helpers/api';
import BaseService from '../../services/base.service';

class ArticleService extends BaseService {
  async index(query) {
    try {
      const articles = await api.call('get', '/article/user/authors', query);
      return articles.data;
    } catch (e) {
      throw e.response;
    }
  }

  async list(query) {
    try {
      const articles = await api.call('get', '/article', query);
      return articles.data;
    } catch (e) {
      throw e.response;
    }
  }
}

export default new ArticleService('article');
