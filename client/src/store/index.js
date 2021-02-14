import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import barang from './reducers/barangReducer'

const reducer = combineReducers({barang})

const store = createStore(
  reducer, applyMiddleware(thunk)
)

export default store