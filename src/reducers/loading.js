import {
  RECEIVE_DATA
} from '../actions/shared'

// Loading Indicator Reducer
export default function loading(state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    default :
      return state
  }
}
