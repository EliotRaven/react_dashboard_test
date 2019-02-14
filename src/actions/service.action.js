import { serviceActionTypes } from "../action-types";

export const serviceAction = {
    getServices
}

function getServices () {
    return {
        type: serviceActionTypes.GET_SERVICE_REQUEST,
        loading: true,
        error: {},
    }
}
