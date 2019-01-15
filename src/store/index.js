import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import userReducer from "./reducers/users";
import { fetchUsers } from "../services"




const rootReducer = combineReducers({
  usersData: userReducer
})

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));




store.dispatch(
  fetchUsers()
);


export default store 