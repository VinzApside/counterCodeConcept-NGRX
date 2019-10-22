import { State } from "./app.state";

const initialState: State = {
  count: 0,
  title: "My counter"
};

export function reducer(state, action) {
  console.log("in reducer =>", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "INCREMENT":
      return {};
    default:
      return state;
  }
}
