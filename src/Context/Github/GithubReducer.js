import { GET_USERS, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SHOW_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    // Get All Users
    case GET_USERS:
      return ({
        users: action.payload
      })
    // Search Users
    case SEARCH_USERS:
      return ({
        ...state,
        users: action.payload,
        loading: false
      })
    // Get User
    case GET_USER:
      return ({
        ...state,
        user: action.payload,
        loading: false
      })
    // Get Repos
    case GET_REPOS:
      return ({
        ...state,
        repos: action.payload
      })
    // Clear Users
    case CLEAR_USERS:
      return ({
        ...state,
        users: []
      })
    // Show Loading
    case SHOW_LOADING:
      return ({
        ...state,
        loading: true
      })
    // Default Case
    default:
      return state
  }
}