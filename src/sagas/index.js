import { fork, all } from 'redux-saga/effects'
import authSaga from "./auth.saga";
import articlesSaga from "./articles.saga";
import userSaga from "./user.saga";
import roleSaga from "./role.saga";
import commentSaga from "./comment.saga";
import statisticSaga from "./statistic.saga";

function* rootSaga () {
    yield all([
        fork(authSaga),
        fork(articlesSaga),
        fork(userSaga),
        fork(roleSaga),
        fork(commentSaga),
        fork(statisticSaga),
    ]);
}

export default rootSaga