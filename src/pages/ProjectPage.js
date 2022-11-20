import React, {useState, useEffect} from 'react'
import ProjectForm from '../components/ProjectForm'

const ProjectPage = () => {
  let [projects, setprojects] = useState([])
  useEffect(() => {
    getProjects()
  }, [])
  let getProjects = async () => {
    let response = await fetch('/api/projects/', {
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+JSON.parse(localStorage.getItem('authTokens')).access+'',
    },
    })
    let data = await response.json()
    if(response.status === 200){
      setprojects(data);
      console.log(data)
    }
    else{
      alert('Something went wrong!');
    }
  }
  return (
    <div>
     <div className="fw-bold" style={{fontSize: "1.525em"}}>
            <sapn><i className="bi bi-house-door-fill"></i></sapn>
            <span className="d-inline-block"><h4> Project</h4></span>
        </div>
        <div className="row">
          <div className='col-10 text-center'>
            <div className='row total-row'>
              <div className="col m-2 p-3">Total Projects
                <span className="d-block justify-content-between">
                  {projects.projects_count}
                </span>
              </div>
              <div className="col m-2 p-3">Pending Projects
                <span className="d-block justify-content-between">
                  {projects.pending_projects}
                </span>
              </div>
              <div className="col m-2 p-3">Ongoing Projects
                <span className="d-block justify-content-between">
                {projects.ongoing_projects}
                </span>
              </div>
              <div className="col m-2 p-3">Completed Projects
                <span className="d-block justify-content-between">
                {projects.completed_projects}
                </span>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <ProjectForm/>
            {/* <button className='btn btn-primary'>+ create new project</button> */}
          </div>
        </div>
        <div class="row chart-row">
          <div>
            <canvas id="myChart"></canvas>
          </div> 
        </div>
    </div>
  )
}

export default ProjectPage