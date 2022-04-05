import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer, {
  count: 0,
  todos: [{ id: 1, name: "Learn React", status: true }],
});
export default store;
