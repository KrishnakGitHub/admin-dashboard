import React, {useContext, useState, useEffect} from 'react';
import { Button } from 'reactstrap';

import DashboardGraph from '../components/DashboardGraph';

const domain = 'https://dr-admin-dashboard.herokuapp.com';
// const domain = 'https://8000-autumn-night-66818328.eu-ws2.runcode.io';

const DashboardPage = () => {
  let [dashboard, setDasboard] = useState([])
  useEffect(() => {
    getDasboard()
  }, [])
  
  let getDasboard = async () => {
    let response = await fetch(`${domain}/api/dashboard/`)
    let data = await response.json()
    setDasboard(data)
    console.log(data)
  }
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
                <span className="d-block justify-content-between">{dashboard.client_count}</span>
              </div>
              <div className="col m-2 p-3 bg-white rounded">Total Projects Completed
                <span className="d-block justify-content-between">
                {/* {dashboard.data.map((note, index) => (
                    {note}
                ))} */}
                </span>
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