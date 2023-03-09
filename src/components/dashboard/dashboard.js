import React from 'react'
import ProjectList from '../projects/projectList';
import Notifications from './notifications';
const Dashboard=()=> {
    return (
      <div>
        <ProjectList/>
        <Notifications/>
        <h2>Dashboard</h2>
      </div>
    )
}

export default Dashboard
