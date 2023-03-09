import React from 'react'

export default function Signedoutlinks() {
  return (
    <div className="d-flex flex-col">
        <a className="nav-link active" aria-current="page" href="/signin">Log In</a>
        <a className="nav-link" href="/signup">Register</a>
    </div>
  )
}