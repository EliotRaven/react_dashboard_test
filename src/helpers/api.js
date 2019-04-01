import axios from 'axios'
import {authService} from "../services";

class API {
    call(method, uri, params=null, data=null, auth=false){
        let apiUrl = 'http://localhost:8080/api/v1'
        let authUrl = 'http://localhost:8080/auth'
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