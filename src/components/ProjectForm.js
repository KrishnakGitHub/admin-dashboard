import React from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';


class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      clients:[],
      isLoaded: false,
    };

    this.getClient = this.getClient.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  createProject  = async (e)=> {
    e.preventDefault()
    let response = await fetch('/api/create-project/', {
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+JSON.parse(localStorage.getItem('authTokens')).access+'',
      },
      body:JSON.stringify({
        'project_id':e.target.project_id.value,
        'project_title':e.target.project_title.value,
        'department':e.target.department.value,
        'project_priority':e.target.project_priority.value,
        'client':e.target.client.value,
        'date_from':e.target.date_from.value,
        'date_to':e.target.date_to.value,
        'work_status':e.target.work_status.value,
      })
  })
    let data = await response.json()
    if(response.status === 200){
        alert(data.message)
        this.setState({
          modal: false
        });
    }else{
        alert(data.message)
    }
  };

  getClient  = async ()=> {
    let response = await fetch('/api/clients/', {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+JSON.parse(localStorage.getItem('authTokens')).access+'',
      },
    })
    let data = await response.json()
    if(response.status === 200){
      this.setState({
        isLoaded: true,
        clients: data.clients
      });
      console.log(this.state.clients)
    }else{
        alert(data.detail)
    }
  };
  

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>+ CREATE NEW PROJECT</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-dialog modal-dialog-centered modal-lg'>
          <ModalBody>
            <h3 className='text-center m-4'>Add Client</h3>
            <form onSubmit={this.createProject}>
                <div class="mb-3">
                  <div className='row'>
                    <div className='col'>
                      <label for="id_project_id" class="form-label">Project Id</label>
                      <input type="tel" class="form-control" name='project_id' id="id_project_id" pattern="[0-9]{6}" placeholder="Project Id"/>
                    </div>
                    <div className='col'>
                      <label for="id_project_title" class="form-label">Project Title</label>
                      <input type="text" class="form-control" name='project_title' id="id_project_title" placeholder="Project Title"/>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div className='row'>
                    <div className='col'>
                      <label for="id_project_priority" class="form-label">Project Title</label>
                      <select class="form-select" name='department' aria-label="Default select example">
                        <option selected>Select Department</option>
                        <option value="DD">Development Department</option>
                        <option value="MD">Managers Department</option>
                        <option value="APPD">Application Department</option>
                        <option value="ACCD">Accounts Department</option>
                      </select>
                    </div>
                    <div className='col'>
                      <label for="id_project_priority" class="form-label">Project Title</label>
                      <select class="form-select" name='project_priority' aria-label="Default select example">
                        <option selected>Select Priority</option>
                        <option value="L">Low</option>
                        <option value="M">Medium</option>
                        <option value="H">High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div className='row'>
                    <div className='col'>
                      <label for="id_project_priority" class="form-label">Project Title</label>
                      <select class="form-select" onClick={this.getClient} name='client' aria-label="Default select example">
                        <option selected>Select Client</option>
                        {this.state.clients.map((client, index) => {
                        return (
                          <option key={index} value={client.id}>
                              {client.client_name}
                          </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className='col'></div>
                  </div>
                </div>
                <div class="mb-3">
                <div className='row'>
                    <div className='col'>
                      <label for="id_date_from" class="form-label">Date From</label>
                      <input type="date" class="form-control" name='date_from' id="id_date_from" placeholder="DD-MM-YYYY"/>
                    </div>
                    <div className='col'>
                      <label for="id_date_to" class="form-label">Date To</label>
                      <input type="date" class="form-control" name='date_to' id="id_date_to" placeholder="DD-MM-YYYY"/>
                    </div>
                  </div>
                </div>
                <div class="mb-3 d-flex">
                <label for="id_client_email" class="form-label mx-2">Work Status</label>
                <div class="form-check">
                      <input class="form-check-input" type="radio" name="work_status" id="exampleRadios1" value="option1"/>
                      <label class="form-check-label" for="exampleRadios1">
                        Completed
                      </label>
                    </div>
                    <div class="form-check mx-2">
                      <input class="form-check-input" type="radio" name="work_status" id="exampleRadios2" value="option2"/>
                      <label class="form-check-label" for="exampleRadios2">
                        Pending
                      </label>
                    </div>
                    <div class="form-check mx-2">
                      <input class="form-check-input" type="radio" name="work_status" id="exampleRadios1" value="option3"/>
                      <label class="form-check-label" for="exampleRadios3">
                        On Progress
                      </label>
                    </div>
                    {/* h */}
                    {/* <label for="id_client_email" class="form-label mx-2">Work Status</label>
                    <div class="form-check mx-2">
                      <input class="form-check-input" type="radio"  name="C" id="id_C"/>
                      <label class="form-check-label" for="id_C">
                        Completed
                      </label>
                    </div>
                    <div class="form-check mx-2">
                      <input class="form-check-input" type="radio" name="P" id="id_P"/>
                      <label class="form-check-label" for="id_P">
                        Pending
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="O" id="id_O"/>
                      <label class="form-check-label" for="id_O">
                        On Progress
                      </label>
                    </div> */}
                </div>
                <div class="mb-3">
                    {/* <input type="submit" name='Add' value='Add'/> */}
                    {/* <Button color="primary" type="submit">Add</Button>{' '} */}
                    <ModalFooter>
                        <Button color="primary" type="submit">Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default ProjectForm;