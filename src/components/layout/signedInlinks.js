import React from 'react'

export default function SignedInlinks() {
  return (
    <div className="d-flex flex-col">
        <a className="nav-link active" aria-current="page" href="/create">New Project</a>
        <a className="nav-link" href="/">Your Profile</a>
    </div>
  )
}
