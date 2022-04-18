import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#212121', color: 'white'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className='mt-4' style={{borderBottom: '1px solid white',}} >Category</h5>
                        <p>Bangla</p>
                        <p>English</p>
                        <p>Math</p>
                        <p>Accounting</p>
                        <p>Physics</p>
                        <p>Chemestry</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className='mt-4' style={{borderBottom: '1px solid white',}} >Social Links</h5>
                        <button className='btn text-white d-block mx-auto' >Facebook</button>
                        <button className='btn text-white d-block mx-auto' >Instragram</button>
                        <button className='btn text-white d-block mx-auto' >Twiteer</button>
                        <button className='btn text-white d-block mx-auto' >Linkedin</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h5 className='mt-4' style={{borderBottom: '1px solid white',}} >Qucik Links</h5>
                        <Link className='btn text-white d-block mx-auto' to='/home' >Home</Link>
                        <Link className='btn text-white d-block mx-auto' to='/about' >About Me</Link>
                        <Link className='btn text-white d-block mx-auto' to='/blogs' >Blogs</Link>
                        <Link className='btn text-white d-block mx-auto' to='/register' >Sign Up</Link>
                    </div>
                </div>
                <p>Copyright ©2022 All Right Reserved by Teachers Diary</p>
            </div>
        </div>
    );
};

export default Footer;