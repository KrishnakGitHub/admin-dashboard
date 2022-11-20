import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ManagerClientPage = () => {
  let {authTokens, logoutUser} = useContext(AuthContext)
  let [clients, setclients] = useState([])
  useEffect(() => {
    getClients()
  }, [])
  
  let getClients = async () => {
    let response = await fetch('/api/clients/', {
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ String(authTokens.access),
    },
    })
    let data = await response.json()
    if(response.status === 200){
      setclients(data.clients);
      console.log(data.clients)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
  }
    else{
      alert('Something went wrong!');
    }
  }
  return (
    <div>
      <div className='row'>Clients ({clients.length})</div>
      <table className="table bg-white rounded mt-2 p-4">
        <tbody>
          {clients.map((client, index) => {
             return (
              <tr key={index} className="mb-2">
                <th scope="row">{index+1}</th>
                <td>{client.client_name}</td>
                <td>{client.client_company}</td>
                <td>{client.client_phone}</td>
                <td>{client.client_email}</td>
              </tr>
             )
          })}
          </tbody>
      </table>
    </div>
  )
}

export default ManagerClientPage