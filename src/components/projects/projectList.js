import React from 'react'
import ProjectSummary from './projectSummary'

export default function ProjectList() {
  return (
    <div>
        <div className="container" >
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        </div>
    </div>
  )
}
