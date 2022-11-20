import React , {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';

const ProjectDetailsPage = () => {
  let {authTokens, logoutUser} = useContext(AuthContext)
  let [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
  }, [])
  
  let getProjects = async () => {
    let response = await fetch('/api/projects/', {
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ String(authTokens.access),
    },
    })
    let data = await response.json()
    if(response.status === 200){
      setProjects(data.projects);
      console.log(data.projects)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
  }
    else{
      alert('Something went wrong!');
    }
  }
  return (
    <div>
        <div className="fw-bold" style={{fontSize: "1.525em"}}>
            <sapn><i className="bi bi-house-door-fill"></i></sapn>
            <span className="d-inline-block"><h4> Project Details</h4></span>
        </div>
        <div className="row total-row">
        <table className="table bg-white rounded mt-2 p-4">
        <tbody>
          {projects.map((project, index) => {
             return (
              <tr key={index} className="mb-2">
                <th scope="row">{index+1}</th>
                <td>{project.project_id}</td>
                <td>{project.project_title}</td>
                <td>{project.date_from}</td>
                <td>{project.date_to}</td>
              </tr>
             )
          })}
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default ProjectDetailsPage