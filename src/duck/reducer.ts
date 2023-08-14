import { incrementAsyncRequest } from "./actions";
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_AMOUNT,
  INCREMENT_ASYNC_REQUEST,
  INCREMENT_ASYNC_SUCCESS,
} from "./constants";

interface State {
  value: number;
  status: "idle" | "loading" | "fail";
}

const initialState: State = {
  value: 0,
  status: "idle",
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      state.value += 1;
      return { ...state };

    case DECREMENT:
      state.value -= 1;
      return { ...state };

    case INCREMENT_AMOUNT:
      state.value += action.payload;
      return { ...state };

    case INCREMENT_ASYNC_REQUEST:
      state.status = "loading";
      return { ...state };

    case INCREMENT_ASYNC_SUCCESS:
      state.status = "idle";
      state.value += action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default counterReducer;
