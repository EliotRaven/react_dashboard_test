import axios from 'axios'
import { authService } from '../modules/auth';
import env from '../env'

class API {
    call(method, uri, params=null, data=null, auth=false){
        const apiUrl = env.api
        const authUrl = env.auth
        const url = auth ? authUrl : apiUrl
        const headers = {
            ...authService.getAuthHeaders() || '',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };
        return axios({
            method,
            url: `${url}${uri}`,
            params,
            headers,
            data
        });
    }
}

export default new API();
