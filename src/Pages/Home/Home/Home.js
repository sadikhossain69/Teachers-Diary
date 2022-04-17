import './Home.css'
import React from 'react';
import banner from '../../../Photos/banner.png'
import Typed from 'react-typed';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <div style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', height: '88vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
                <div className='col-lg-6 col-md-12 col-sm-12' >
                    <div className='home-container'>
                        <h4>
                            Hello! I'm a <span style={{color: 'skyblue'}} >Teacher😊</span>!
                        </h4>
                        <h2>
                            <Typed
                                strings={['A Teacher Can Make You Success',
                                        "You Can't Achieve Success Without Teacher",
                                        "A Perfect Teacher Makes A Student Parfect"
                                        ]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </h2>
                        <button className='btn btn-primary' >See More</button>
                    </div>
                </div>
            </div>
            <Services/>
        </>
    );
};

export default Home;