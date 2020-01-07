import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../Context/Github/GithubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);

  return (
    <div className="my-3">
      {githubContext.repos.map(repo => {
        return <RepoItem repo={repo} key={repo.id} />
      })}
    </div>
  )
}

export default Repos
