import { fork } from "redux-saga/effects";

import incrementWatcher from "./../duck/saga";

function* rootSaga() {
  console.log("rootSaga");
  yield fork(incrementWatcher);
}

export default rootSaga;
