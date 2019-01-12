import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from "./reducers/users";



const reducer = combineReducers({
  users: userReducer
})

const store = createStore(
  reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));




export default store 