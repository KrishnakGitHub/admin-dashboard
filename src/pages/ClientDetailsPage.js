import {React, useState, useEffect} from 'react';
import AddClient from '../components/AddClient';


const ClientDetailsPage = () => {
  let [data, setData] = useState([])
  useEffect(() => {
    getClients()
  }, [])
  let getClients = async () => {
    let response = await fetch('/api/clients/', {
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+JSON.parse(localStorage.getItem('authTokens')).access+'',
    },
    })
    let data = await response.json()
    if(response.status === 200){
      setData(data);
    }
    else{
      alert('Something went wrong!');
    }
  }
  return (
    <div>
        <div className="fw-bold" style={{fontSize: "1.525em"}}>
            <sapn><i className="bi bi-house-door-fill"></i></sapn>
            <span className="d-inline-block"><h4> Client Details</h4></span>
        </div>
        <div className="row">
          <div className='col-12'>
            <div className='row mt-3'>
              <div className='col-9'>
                <div className='row total-row bg-white rounded p-2 mx-2'>
                  <div className="col-4 p-2">Total Clients
                    <span className="d-block justify-content-between">{data.client_count}</span>
                  </div>
                  <div className='col-2 bg-transparent'></div>
                  <div className='col-2 bg-transparent'></div>
                  <div className="col-4 p-2">Current Clients
                    <span className="d-block justify-content-between">{data.client_count}</span>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='row bg-white rounded p-2'>
                  <div className="col p-2">
                    <AddClient/>
                  </div>
                </div>
              </div>
            </div>
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

export default ClientDetailsPage