import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./../store";
import {
  increment,
  decrement,
  incrementAmount,
  incrementAsyncWatcher,
} from "./../duck/actions";
import { useState } from "react";

export default function Counter() {
  const value = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch: any = useDispatch();
  const [incrementAmountValue, setIncrementAmount] = useState(2);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+</button>

      <div>
        <input
          type="number"
          value={incrementAmountValue}
          onChange={(e: any) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementAmount(Number(incrementAmountValue)));
          }}
        >
          Add Amount
        </button>
        <button
          onClick={() =>
            dispatch(incrementAsyncWatcher(Number(incrementAmountValue)))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
