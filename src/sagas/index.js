import { fork, all } from 'redux-saga/effects'
import authSaga from "./auth.saga";
import serviceSaga from "./service.saga";

function* rootSaga () {
    yield all([
        fork(authSaga),
        fork(serviceSaga)
    ]);
}

export default rootSaga