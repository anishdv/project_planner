import React from 'react'
import { useState } from 'react';

const Signin=()=> {
     const [email, setEmail]=useState("");
     const [password, setPassword]=useState("");

     const handleChangeE=(e)=>{
        setEmail(e.target.value);
     }
     const handleChangeP=(e)=>{
        setPassword(e.target.value);
     }
     
  return (
    <div className="container pt-5">
    <div className="row justify-content-center">
    <div className="col-sm-6">
    <form >
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} onChange={handleChangeE} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group pt-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={handleChangeP} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
</div>
</div>
</div>
  )
}

export default Signin;