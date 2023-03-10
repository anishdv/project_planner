import React from 'react'
import ProjectList from '../projects/projectList';
import Notifications from './notifications';
import { connect } from 'react-redux';

const Dashboard=(props)=> {
  // console.log(props);
  const {projects}=props;
  // console.log(projects);
    return (
      <div>
        <ProjectList projects={projects}/>
        <Notifications/>
        <h2>Dashboard</h2>
      </div>
    )
}
const mapStatetoProps=(state)=>{
  return{
    projects:state.project.projects
  }
}
export default connect(mapStatetoProps)(Dashboard)
