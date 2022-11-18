import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom';

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <div className="container-fluid p-0 pt-2 m-0 ">
                <div className="container">
                <div className="row py-5 align-items-center justify-content-center">
                    <div className="col-lg-5 bg-white rounded shadow">
                    <div className="card mt-4 border-0">
                        <div className="card-body">
                        <div className="mb-5">
                            <p className="text-center">Login here</p>
                            <form onSubmit={loginUser} className="form-floating">
                                <div class="form-floating mb-3">
                                    <input type="text" name="username" class="form-control" id="floatingInput" placeholder="username"/>
                                    <label for="floatingInput">Enter Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className='row mt-2'>
                                    <input className='btn btn-primary mx-auto w-25' type="submit" value="Login" name='Login'/>
                                </div>
                                <div className='row mt-2'>
                                    <p>Don't have an account? <Link to="/register">create one</Link></p>
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

export default LoginPage
