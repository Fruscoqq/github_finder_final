import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={avatar_url} alt="git pic" style={{ width: '120px' }} className="mx-auto d-block" />
        <h5 className="card-title">{login}</h5>
        <Link to={`/User/${login}`} className="btn btn-dark ">More</Link>
      </div>
    </div>
  )
}

export default UserItem
