import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {Link} from 'react-router-dom';


const RegisterPage = () => {
let {RegisterUser} = useContext(AuthContext)
  return (
    <div>
        <div className="container-fluid p-0 pt-2 m-0 ">
        <div className="container">
        <div className="row py-5 align-items-center justify-content-center">
            <div className="col-lg-5 rounded shadow">
            <div className="card mt-4 border-0">
                <div className="card-body px-5">
                <div className="mb-5">
                    <p className="text-center">Register Here</p>
                    <form onSubmit={RegisterUser}>
                        <div className='row mt-2'>
                            <input className='form-control' type="text" name="username" placeholder="Enter Username" />
                        </div>
                        <div className='row mt-2'>
                            <input className='form-control' type="text" name="email" placeholder="Enter Username" />
                        </div>
                        <div className='row mt-2'>
                                <input className='form-control' type="password" name="password" placeholder="Enter Password" />
                        </div>
                        <div className='row mt-2'>
                                <input type="submit" name='Register'/>
                        </div>
                        <div className='row mt-2'>
                            <p>Already, have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default RegisterPage