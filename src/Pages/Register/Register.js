import './Register.css'
import React, { useState } from 'react';
import registerImg from '../../Photos/register.svg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const navigate = useNavigate()

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    

    const handleRegister = event => {
        event.preventDefault()
        if( password !== confirmPassword ) {
            toast("Confirm Password Didn't Match!")
        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
        
    }
    if(user) {
        navigate('/')
        console.log(user);
    }
    if(error) {
         toast(error.message)
    }
    if(loading) {
        return <Loading/>
    }


    return (
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 register-form mb-5 '>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleRegister} >
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleName" aria-describedby="nameHelp" placeholder='Enter Name(Optional)' />
                        </div>

                        <div className="mb-3">
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' required />
                        </div>

                        <div className="mb-3">
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
                        </div>

                        <div className="mb-3">
                            <input onBlur={handleConfirmPassword} type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        <ToastContainer/>
                        <p className='mt-2'>Already Have An Account?<Link className='text-decoration-none' to='/login' > Login Here</Link></p>
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