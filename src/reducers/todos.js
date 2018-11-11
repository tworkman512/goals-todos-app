import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'

// Pure function/Reducer that takes in state and an action to update the state
export function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
      return state.map((todo) => todo.id !== action.id ? todo :
      Object.assign({}, todo, { complete : !todo.complete }))
    case RECEIVE_DATA :
      return action.todos
    default :
      return state
  }
}
