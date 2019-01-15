import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import userReducer from "./reducers/users";

const rootReducer = combineReducers({
  usersData: userReducer
})

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

export default store 