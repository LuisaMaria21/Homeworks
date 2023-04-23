import './App.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementBy, selectCount } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(incrementBy(5))}>+</button>
      </div>
    </div>
  );
}

export default App;


