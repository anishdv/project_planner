import React from 'react'
import { useState } from 'react';

const CreateNew=()=> {
     const [title, setTitle]=useState("");
     const [content, setContent]=useState("");

     const handleSubmit=(e)=>{
        console.log(title);
        console.log(content);
        e.preventDefault();
     }
     
  return (
    <div className="container pt-5">
    <div className="row justify-content-center">
        <h4 className="col-sm-3 text-muted">Create New Project</h4>
    </div>
    <div className="row justify-content-center">
    <div className="col-sm-6">
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title of Project</label>
    <input type="name" value={title} onChange={e=>setTitle(e.target.value)} className="form-control" aria-describedby="emailHelp" placeholder="" />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group pt-3">
    <label htmlFor="exampleInputPassword1">Content</label>
    <textarea type="name" value={content} onChange={e=>setContent(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Create</button>
</form>
</div>
</div>
</div>
  )
}

export default CreateNew;