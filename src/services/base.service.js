import api from '../helpers/api';

class BaseService {
  constructor(entity) {
    this.entity = entity;
  }

  async index(query) {
    try {
      const res = await api.call('get', `/${this.entity}`, query);
      return res.data;
    } catch(error) {
      return error.response;
    }
  }

  async show(id) {
	  try {
		  const res = await api.call('get', `/${this.entity}/${id}`);
		  return res.data;
	  } catch(error) {
		  return error.response;
	  }
  }

  async create(data) {
	  try {
		  const res = await api.call('post', `/${this.entity}`, null, data);
		  return res.data;
	  } catch(error) {
		  return error.response;
	  }
  }

	async update(id, data) {
		try {
			const res = await api.call('put', `/${this.entity}/${id}`, null, data);
			return res.data;
		} catch(error) {
			return error.response;
		}
  }

	async remove(id) {
		try {
			const res = await api.call('delete', `/${this.entity}/${id}`);
			return res.data;
		} catch(error) {
			return error.response;
		}
  }
}

export default BaseService;
