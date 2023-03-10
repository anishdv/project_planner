import React from 'react'
import ProjectSummary from './projectSummary'

export default function ProjectList({projects}) {
  return (
    <div>
        <div className="container" >
        {projects && projects.map(project=>{
          return (
            <ProjectSummary project={project} key={project.id}/>
          )
        })}
        </div>
    </div>
  )
}
