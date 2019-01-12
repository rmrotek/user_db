import { createStore, combineReducers } from "redux";

export const initialState: State = {
  users: fromUsers.initialState
}

export const reducer = combineReducers<State>({
  users: fromUsers.reducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);




export default store 