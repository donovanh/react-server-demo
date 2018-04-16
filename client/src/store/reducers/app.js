import { SET_MESSAGE_FINAL } from '../constants'

const initialState = {
  message: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE_FINAL:
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}
