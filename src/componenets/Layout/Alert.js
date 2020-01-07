import React, { useContext } from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    <div>
      {alertContext.alert !== '' && (<div className={`alert alert-${alertContext.alert.type} my-3`}>{alertContext.alert.msg}</div>)}
    </div>
  )
}

export default Alert
