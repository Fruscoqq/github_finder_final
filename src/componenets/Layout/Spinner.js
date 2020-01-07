import React, { useContext, Fragment } from 'react';
import spinner from '../Layout/spinner.gif';
import GithubContext from '../../Context/Github/GithubContext';

const Spinner = () => {
  const githubContext = useContext(GithubContext);

  return (
    <Fragment>
      {githubContext.loading && (
        <img src={spinner} alt="loading gif" className="d-block mx-auto" />
      )}
    </Fragment>
  )
}

export default Spinner
