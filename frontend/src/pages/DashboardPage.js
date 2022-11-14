import React from 'react';
import '../App.css';

import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div>
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
  )
}

export default DashboardPage