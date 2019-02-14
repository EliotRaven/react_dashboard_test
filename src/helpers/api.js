import axios from 'axios'
import {authService} from "../services";

class API {
    call(method, url, params=null, data=null){
        let headers = {
            ...authService.getAuthHeaders() || '',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
        return axios({
            method,
            url,
            params,
            headers,
            data
        })
    }
}

export default new API()