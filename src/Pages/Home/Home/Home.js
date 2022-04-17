import './Home.css'
import React from 'react';
import banner from '../../../Photos/banner.png'

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', height: '88vh'}} >
            <div className='col-lg-6 col-md-12 col-sm-12' >
                <div className='home-container'>
                    <h2>This is Home</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;