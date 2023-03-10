import React from 'react'

export default function ProjectSummary({project}) {
  return (
        <div className="row pt-3 justify-content-start" >
        <div className=" col-sm-6 project-summary card"  >
                <div className="card-body">
                    <section>{project.title}</section>
                    <p>Posted by Anish Devnani 1</p>
                    <p className="text-muted">8th March 2023</p>
                </div>
            </div>
        </div>
  )
}
