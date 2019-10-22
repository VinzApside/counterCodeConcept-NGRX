import { State } from "./app.state";

const initialState: State = {
  count: 0,
  title: "My counter"
};

export function reducer(state = initialState, action) {
  console.log("in reducer =>", action);
  switch (action.type) {
    case "INCREMENT":
      const newStateInc = {
        ...state,
        count: state.count + action.payload
      };
      console.log(newStateInc);
      return newStateInc;
    case "DECREMENT":
      const newStateDec = {
        ...state,
        count: state.count - action.payload
      };
      console.log(newStateDec);
      return newStateDec;
    default:
      return state;
  }
}
