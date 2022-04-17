import './Login.css'
import React from 'react';
import login from '../../Photos/login.svg'

const Login = () => {
    return (
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 mb-5'>
                    <img className='img-fluid' src={login} alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 register-form '>
                    <h2>Login</h2>
                    <form>

                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' required />
                        </div>

                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;