import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row base'>
          <div className='sidebar col-3'>
            <Sidebar/>
          </div>
          <div className="main col m-2 p-3">
            <div className="fw-bold" style={{fontSize: "1.525em"}}>
              <sapn><i className="bi bi-house-door-fill"></i></sapn>
              <span className="d-inline-block"><h4> Dashboard</h4></span>
            </div>
            <div className="row total-row">
              <div className="col m-2 p-3">Total Projects</div>
              <div className="col m-2 p-3">Pending Projects</div>
              <div className="col m-2 p-3">Ongoing Projects</div>
              <div className="col m-2 p-3">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage