import React, { useReducer, useState } from "react";

const Reducer = (State, Action) => {
  if ((Action.type === "INC_COUNT1"))
    return { ...State, Count_1: State.Count_1 + 1 };
  else if ((Action.type === "INC_COUNT2"))
    return { ...State, Count_2: State.Count_2 + 1 };
  else if ((Action.type === "INC_COUNT1_BY"))
    return { ...State, Count_1: State.Count_1 + Action.payload };
  else if ((Action.type === "INC_COUNT2_BY"))
    return { ...State, Count_2: State.Count_2 + Action.payload };
  else {
    return State;
  }
};
export default function ManyCounters() {
  const [state, dispatch] = useReducer(Reducer, { Count_1: 0, Count_2: 0 });



  return (
    <div>
      <button
        onClick={() => dispatch({ type: "INC_COUNT1" })}
        className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
      >
        <span>Count_1</span>
        {state.Count_1}
      </button>


      <button
        onClick={() => dispatch({ type: "INC_COUNT1_BY", payload: 5 })}
        className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
      >
        <span>Count_1+++5</span>
   
      </button>

      <button
         onClick={()=>dispatch({ type: "INC_COUNT2" })}
        className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
      >
        <span>Count_2</span>
        {state.Count_2}
      </button>

      <button
         onClick={()=>dispatch({ type: "INC_COUNT2_BY" , payload:5})}
        className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
      >
        <span>Count_2+++5</span>
      </button>
    </div>
  );
}
