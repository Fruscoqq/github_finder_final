import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../Context/Github/GithubContext';

const SingleUser = ({ match }) => {

  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { name, hireable, avatar_url, html_url, company, blog, location, bio, following, followers, public_gists, public_repos } = githubContext.user

  return (
    <div>
      <Link to='/' className="btn btn-primary my-3">Back To Search</Link> Hireable: {' '} {hireable ? (<span>I'm Hireable</span>) : (<span>I'm Not Hireable</span>)}


      <Fragment>
        <div className="row my-3">
          <div className="col-6 text-center">
            <img src={avatar_url} alt="git user pic" style={{ width: '200px' }} className="mx-auto d-block" />
            {name && (<h5 className="my-3">{name}</h5>)}
            {location && (<p>Location:{location}</p>)}

          </div>
          <div className="col-6">
            {bio && (<p className="lead">{bio}</p>)}
            {company && (<p>Company: {company}</p>)}
            {blog && (<p>Website: {blog}</p>)}
            <a href={html_url} className="btn btn-dark btn-block">More</a>
          </div>
        </div>


        <div className="row">
          <div className="col d-flex justify-content-center">
            <span class="badge badge-primary">Followers: {followers}</span>
            <span class="badge badge-secondary">Following: {following}</span>
            <span class="badge badge-success">Public Repos: {public_repos}</span>
            <span class="badge badge-danger">Public Gists: {public_gists}</span>
          </div>
        </div>

        <Repos />
      </Fragment>
    </div>
  )
}

export default SingleUser
