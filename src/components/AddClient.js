import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

// const domain = 'https://dr-admin-dashboard.herokuapp.com';
const domain = 'https://8000-autumn-night-66818328.eu-ws2.runcode.io';

class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.AddClient = this.AddClient.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  AddClient  = async (e )=> {
    console.log('Click happened');
    e.preventDefault()
    let response = await fetch(`${domain}/api/create-client/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'client_name':e.target.client_name.value, 'client_company':e.target.client_company.value, 'client_phone':e.target.client_phone.value, 'client_email':e.target.client_email.value})
    })
    let data = await response.json()
    if(response.status === 200){
        alert(data.message)
    }else{
        alert('Something went wrong!')
    }
  };
  

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>+ ADD NEW CLIENT</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-dialog modal-dialog-centered'>
          <ModalBody>
            <h3 className='text-center m-4'>Add Client</h3>
            <form onSubmit={this.AddClient}>
                <div class="mb-3">
                    <label for="id_client_name" class="form-label">Client Name</label>
                    <input type="text" class="form-control" name='client_name' id="id_client_name" placeholder="Client Name"/>
                </div>
                <div class="mb-3">
                    <label for="id_client_company" class="form-label">Client Company</label>
                    <input type="text" class="form-control" name='client_company' id="id_client_company" placeholder="Company Name"/>
                </div>
                <div class="mb-3">
                    <label for="id_client_phone" class="form-label">Client Phone</label>
                    <input type="tel" class="form-control" name='client_phone' id="id_client_phone" placeholder="1234567890" pattern="[0-9]{10}"/>
                </div>
                <div class="mb-3">
                    <label for="id_client_email" class="form-label">Client Email</label>
                    <input type="email" class="form-control" name='client_email' id="id_client_email" placeholder="name@example.com"/>
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
export default AddClient;