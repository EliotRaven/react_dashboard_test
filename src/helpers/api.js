import axios from 'axios'
import {authService} from "../services";
import env from '../env'

class API {
    call(method, uri, params=null, data=null, auth=false){
        let apiUrl = env.api
        let authUrl = env.auth
        let url = auth ? authUrl : apiUrl
        let headers = {
            ...authService.getAuthHeaders() || '',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
        return axios({
            method,
            url: `${url}${uri}`,
            params,
            headers,
            data
        })
    }
}

export default new API()