import React, { useReducer } from 'react';
import AlertReducer from './AlertReducer';
import AlertContext from './AlertContext';
import { SHOW_ALERT, HIDE_ALERT } from '../types';


const AlertState = (props) => {
  const initialState = {
    alert: {}
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Show Alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, type }
    })

    setTimeout(() => {
      hideAlert();
    }, 3000)
  }

  // Hide Alert
  const hideAlert = () => {
    dispatch({
      type: HIDE_ALERT
    })
  }

  return (
    <AlertContext.Provider value={{
      alert: state.alert,
      showAlert
    }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState