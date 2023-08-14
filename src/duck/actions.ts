import {
  INCREMENT,
  DECREMENT,
  INCREMENT_AMOUNT,
  INCREMENT_ASYNC_REQUEST,
  INCREMENT_ASYNC_SUCCESS,
  INCREMENT_WATCHER,
} from "./constants";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementAmount = (value: number) => ({
  type: INCREMENT_AMOUNT,
  payload: value,
});

export const incrementAsyncWatcher = (value: number) => ({
  type: INCREMENT_WATCHER,
  payload: value,
});
export const incrementAsyncRequest = () => ({ type: INCREMENT_ASYNC_REQUEST });
export const incrementAsyncSuccess = (value: number) => ({
  type: INCREMENT_ASYNC_SUCCESS,
  payload: value,
});
