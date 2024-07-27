import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="item-middle flex-col">
        <p className="mb-3">Count: {state.count}</p>
        <div className="flex gap-2">
          <button
            className="w-[77px] h-[44px] bg-slate-300 border border-blue-500 rounded-[50px]"
            onClick={() => dispatch({ type: "increment" })}
          >
            증가
          </button>
          <button
            className="w-[77px] h-[44px] bg-slate-300 border border-blue-500 rounded-[50px]"
            onClick={() => dispatch({ type: "decrement" })}
          >
            감소
          </button>
        </div>
      </div>
    </>
  );
};
export default UseReducer;
