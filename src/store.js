import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import listReducer from "./reducers/listReducer"

const rootReducer = combineReducers({
  listReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
