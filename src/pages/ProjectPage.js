import React from 'react'

const ProjectPage = () => {
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
                <span className="d-block justify-content-between">10</span>
              </div>
              <div className="col m-2 p-3">Pending Projects
                <span className="d-block justify-content-between">3</span>
              </div>
              <div className="col m-2 p-3">Ongoing Projects
                <span className="d-block justify-content-between">2</span>
              </div>
              <div className="col m-2 p-3">Completed Projects
                <span className="d-block justify-content-between">5</span>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <button className='btn btn-primary'>+ create new project</button>
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