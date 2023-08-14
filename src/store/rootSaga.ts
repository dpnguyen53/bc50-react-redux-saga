import { fork, all } from "redux-saga/effects";

import incrementWatcher from "./../duck/saga";

function* helloSaga() {
  console.log("helloSaga");
}

function* rootSaga() {
  console.log("rootSaga");
  yield all([fork(incrementWatcher), fork(helloSaga)]);
}

export default rootSaga;
