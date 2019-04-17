import BaseService from '../../services/base.service';
import api from '../../helpers/api';

class UserService extends BaseService {
  async index(query) {
    try {
      const users = await api.call('get', '/user/', query);
      return users.data;
    } catch (e) {
      return e.response;
    }
  }
}

export default new UserService('user');
