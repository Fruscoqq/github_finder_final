import { SHOW_ALERT, HIDE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return ({
        ...state,
        alert: action.payload
      })
    case HIDE_ALERT:
      return ({
        ...state,
        alert: {}
      })
    default:
      return state
  }
}