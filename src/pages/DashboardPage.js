import React, {useState, useContext, useEffect} from 'react';

import ProjectForm from '../components/ProjectForm';
import DashboardGraph from '../components/DashboardGraph';
import AuthContext from '../context/AuthContext';


const DashboardPage = () => {
  let {authTokens, logoutUser} = useContext(AuthContext)
  let [dashboard, setDasboard] = useState([])
  useEffect(() => {
    getDasboard()
  }, [])
  
  let getDasboard = async () => {
    let response = await fetch('/api/dashboard/', {
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ String(authTokens.access),
    },
    })
    let data = await response.json()
    if(response.status === 200){
      setDasboard(data);
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
        <span className="d-inline-block"><h4> Dashboard</h4></span>
      </div>
      <div className="d-flex p-3 rounded total-row">
        <ProjectForm/>
      </div>
            <div className='row p-2'>
              <div className="col m-2 p-3 bg-white rounded">Total Clients
                <h3 className="d-block justify-content-between">{dashboard.client_count}</h3>
              </div>
              <div className="col m-2 p-3 bg-white rounded">
                <div className='row'>
                  <div className='col-9'>
                    Total Projects Completed
                    <div class="progress my-3">
                      <div className="progress-bar" role="progressbar" style={{ width:dashboard.project_progress+'%' }} aria-valuenow={dashboard.completed_projects_count} aria-valuemin="0" aria-valuemax={dashboard.ongoing_projects_count+dashboard.pending_projects_count}></div>
                    </div>
                  </div>
                  <div className='col text-center'>
                    <h3 className="d-block justify-content-between">{dashboard.completed_projects_count}</h3>
                  </div>
                </div>
              </div>
              <div className="col m-2 p-3 bg-white rounded">Project Category
                <span className="d-block justify-content-between"></span>
              </div>
            </div>
            <DashboardGraph/>
      <div>
      </div>
     </div>
  )
}

export default DashboardPage