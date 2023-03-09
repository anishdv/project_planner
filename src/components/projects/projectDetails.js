import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails=()=>{
    const {id}=useParams();
  return (
    <div className="container w-100 ">
        <div className="row pt-3 justify-content-start" >
        <div className=" col-sm-10 project-summary"  >
                <div className="vh-100">
                    <h1>Project title -{id}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <hr/>
                    <h5 className="text-muted">Posted by Anish Devnani</h5>
                    <p className="text-muted">8th March 2023</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
