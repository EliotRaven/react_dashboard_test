import { fork, all } from 'redux-saga/effects'
import authSaga from "./auth.saga";

function* rootSaga () {
    yield all([
        fork(authSaga)
    ]);
}

export default rootSaga