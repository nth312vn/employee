import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { questionsReducer } from "./reducers/questions";
import { usersReducer } from "./reducers/users";

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
