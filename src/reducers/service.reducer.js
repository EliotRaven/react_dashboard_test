import { serviceActionTypes } from '../action-types'

const initState = {
    loading: true,
    error: {},
    services: []
}

const service = (state = initState, action) => {
    switch(action.type){
        case serviceActionTypes.GET_SERVICE_REQUEST:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            }
        case serviceActionTypes.GET_SERVICE_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
                services: action.data
            }
        case serviceActionTypes.GET_SERVICE_FAILURE:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            }
        default:
            return state
    }
}
export default service