import React from 'react';
import '../App.css';
import DashboardGraph from '../components/DashboardGraph';
import { Button } from 'reactstrap';
const DashboardPage = () => {
  return (
    <div>
      <div className="fw-bold" style={{fontSize: "1.525em"}}>
        <sapn><i className="bi bi-house-door-fill"></i></sapn>
        <span className="d-inline-block"><h4> Dashboard</h4></span>
      </div>
      <div className="d-flex p-3 rounded total-row">
      <Button color="primary" href="#" tag="a"> + create new project</Button>
      </div>
            <div className='row p-2'>
              <div className="col m-2 p-3 bg-white rounded">Total Clients
                <span className="d-block justify-content-between">10</span>
              </div>
              <div className="col m-2 p-3 bg-white rounded">Total Projects Completed
                <span className="d-block justify-content-between"></span>
              </div>
              <div className="col m-2 p-3 bg-white rounded">Project Category
                <span className="d-block justify-content-between"></span>
              </div>
            </div>
      <div>
        <DashboardGraph/>
      </div>
     </div>
  )
}

export default DashboardPage