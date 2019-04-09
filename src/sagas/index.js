import { fork, all } from 'redux-saga/effects';
import { authSaga } from "../modules/auth";
import { userSaga } from "../modules/user";
import { articlesSaga } from "../modules/article";
import { roleSaga } from "../modules/role";
import { commentSaga } from "../modules/comment";
import { statisticSaga } from "../modules/statistic";

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

export default rootSaga;
