import './Register.css'
import React, { useState } from 'react';
import registerImg from '../../Photos/register.svg'

const Register = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleEmail = event => {
        console.log(event.target.value);
    }

    const handlePassword = event => {
        console.log(event.target.value);
    }

    return (
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 register-form mb-5 '>
                    <h2>Sign Up</h2>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleName" aria-describedby="nameHelp" placeholder='Enter Name(Optional)' />
                        </div>

                        <div className="mb-3">
                            <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' required />
                        </div>

                        <div className="mb-3">
                            <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
                        </div>

                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
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