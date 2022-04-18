import './About.css'
import React from 'react';
import about from '../../Photos/about/about.JPG'
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <div className='container mb-5 mt-4'>
            <div className="row">
                <Fade left>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <img style={{borderRadius: '10px'}} className='img-fluid' src={about} alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-start">
                        <h2>Hi, I'm <span style={{color: 'goldenrod', fontWeight: 'bold'}} >Sadik🥰</span></h2>
                        <p>I'm a professional <span style={{fontSize: 'large', fontWeight: 'bold'}} >Frontend Web Developer</span></p>
                        <p>
                            Hi,there! My name is Sadik and I'm a professional <span style={{fontWeight: 'bold'}}>Frontend Web Developer</span>.I have lots of projects.I know different types of slills.My skills is <span style={{fontWeight: 'bold'}}>Html, Css, Bootstrap, Tailwind, Javascript, Api, React, React-Router</span> and lots of things.I love to learn and explore new things every day.I love challanges and take challange regularly.I have problem solving skill thats help me very effectively in my projects.My future plan and goal is to become a <span style={{fontWeight: 'bold'}}>Software Engineer</span>.My next 6 month mission is explore very deaply new programming language like <span style={{fontWeight: 'bold'}}>Python, Go</span> etc. But my personal favourite language is <span style={{fontWeight: 'bold'}} >Javascript</span> because it is my first Programming Language.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;