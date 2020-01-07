import React, { useContext, useState } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.showAlert('Please enter something', 'danger')
    } else {
      githubContext.searchUsers(text);
      setText('')
    }
  }

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <input type="text" name="text" className="form-control my-3" placeholder="Search Users.." onChange={onChange} value={text} />
      <input type="submit" value="Search" className="btn btn-dark btn-block" />
      {githubContext.users.length > 0 && (<input type="button" value="Clear" className="btn btn-block btn-warning" onClick={githubContext.clearUsers} />)}
    </form>
  )
}

export default Search
