import './Login.css'
import React, { useState } from 'react';
import login from '../../Photos/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleResetPassword = () => {
        if(email) {
            return toast('Check Your Email Inbox To Reset')
        }
    }

    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
        console.log(user);

    }

    if(error) {
        toast(error.message)
    }
    
    if(loading) {
        return <Loading/>
    }

    if(user) {
        navigate(from, { replace: true });
    }

    if(user) {
        console.log(user);
    }

    return (
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 mb-5'>
                    <img className='img-fluid' src={login} alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 register-form '>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} >

                        <div className="mb-3">
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' required />
                        </div>

                        <div className="mb-3">
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <p className='mt-2'>New To Teachers Diary?<Link className='text-decoration-none' to='/register' > Sign Up Here</Link></p>
                        <p className='mt-2'>Forget Password?<button onClick={handleResetPassword} className='btn text-primary text-decoration-none' >Reset Password</button></p>
                    </form>
                </div>
        <ToastContainer/>
            </div>
        </div>
    );
};

export default Login;