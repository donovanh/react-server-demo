import { SET_MESSAGE } from '../constants/app'

export const setMessage = messageText => ({ type: SET_MESSAGE, message: messageText })
