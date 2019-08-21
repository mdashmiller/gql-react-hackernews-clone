import React from 'react'

function Link({ link }) {
  return (
    <div>
      <div>
        <p>{link.description} ({link.url})</p>
        <p>{link.createdAt}</p>
      </div>
    </div>
  )
}

export default Link
