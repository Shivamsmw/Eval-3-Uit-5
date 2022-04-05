import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incCount } from "./action";
import { resetCount } from "./action";
import { decCount } from "./action";

export const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incCount(2))}>INC</button>
      <button onClick={() => dispatch(decCount(2))}>DEC</button>
      <button onClick={() => dispatch(resetCount(2))}>RESET</button>
    </div>
  );
};
