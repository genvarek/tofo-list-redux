import { combineReducers } from 'redux'
import todos from './Todos'

const todoApp = combineReducers({
  todos
})

export default todoApp
