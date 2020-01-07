import React from 'react'

const RepoItem = ({ repo: { name, html_url } }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <a href={html_url}>{name}</a>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
