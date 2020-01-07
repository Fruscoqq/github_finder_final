import React, { useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import UserItem from './UserItem';

const User = () => {

  // useEffect(() => {
  //   githubContext.getUsers();
  // }, [])

  const githubContext = useContext(GithubContext);

  return (
    <div style={userStyle} className="py-3">
      {githubContext.users.map(user => {
        return (
          <UserItem user={user} key={user.id} />
        )
      })}
    </div>
  )
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '1rem'
}

export default User
