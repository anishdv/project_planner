import React from 'react'
import { useState } from 'react';

const Signup=()=> {
     const [email, setEmail]=useState("");
     const [password, setPassword]=useState("");
     const [first, setFirst]=useState("");
     const [last, setLast]=useState("");
     

     const handleSubmit=(e)=>{
        console.log(first);
        console.log(last);
        console.log(email);
        console.log(password);
        e.preventDefault();
     }
     
  return (
    <div className="container pt-5">
    <div className="row justify-content-center">
        <h4 className="col-sm-2 text-muted">SIGN UP</h4>
    </div>
    <div className="row justify-content-center">
    <div className="col-sm-6">
    <form onSubmit={handleSubmit}>
    <div className="form-group pt-3">
    <label>First Name</label>
    <input type="name" value={first} onChange={e=>setFirst(e.target.value)} className="form-control" placeholder=""/>
  </div>
  <div className="form-group pt-3">
    <label>Last Name</label>
    <input type="name" value={last} onChange={e=>setLast(e.target.value)} className="form-control" placeholder=""/>
  </div>
  <div className="form-group pt-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group pt-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Sign up</button>
</form>
</div>
</div>
</div>
  )
}

export default Signup;