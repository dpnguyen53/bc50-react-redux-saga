import { takeEvery, takeLatest, delay, put } from "redux-saga/effects";
import { INCREMENT_WATCHER } from "./constants";
import { incrementAsyncRequest, incrementAsyncSuccess } from "./actions";

function* handleIncrementAsync(action: any) {
  yield put(incrementAsyncRequest());
  yield delay(2000);
  yield put(incrementAsyncSuccess(action.payload));
}

function* incrementWatcher() {
  //   yield takeEvery(INCREMENT_WATCHER, handleIncrementAsync);
  yield takeLatest(INCREMENT_WATCHER, handleIncrementAsync);
}

export default incrementWatcher;
