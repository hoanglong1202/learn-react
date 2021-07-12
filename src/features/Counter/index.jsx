import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

Counter.propTypes = {};

function Counter(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncreaseCounter = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseCounter = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncreaseCounter}>Increase</button>
      <button onClick={handleDecreaseCounter}>Decrease</button>
    </div>
  );
}

export default Counter;
