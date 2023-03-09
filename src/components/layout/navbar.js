import React from 'react';
import SignedInlinks from './signedInlinks';
import Signedoutlinks from './signedoutlinks';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PlanYaar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <SignedInlinks/>
      <Signedoutlinks/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
