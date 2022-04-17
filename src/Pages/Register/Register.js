import './Register.css'
import React from 'react';
import registerImg from '../../Photos/register.svg'

const Register = () => {
    return (
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 register-form '>
                    <h2>Sign Up</h2>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' />
                        </div>

                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
                        </div>

                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder='Confirm Password' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src={registerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;