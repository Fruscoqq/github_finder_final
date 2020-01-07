import React, { useReducer } from 'react';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';
import axios from 'axios';
import { GET_USERS, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SHOW_LOADING } from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get Users
  const getUsers = async () => {
    const res = await axios.get('https://api.github.com/users')
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  }

  // Search Users
  const searchUsers = async (text) => {

    showLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  // Get User
  const getUser = async (username) => {

    showLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }

  // Get User Repos
  const getRepos = async (username) => {

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  // Clear Users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    })
  }

  // Show Loading
  const showLoading = () => {
    dispatch({
      type: SHOW_LOADING
    })
  }


  return (
    <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      getUsers,
      searchUsers,
      getUser,
      getRepos,
      clearUsers
    }}>
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState

