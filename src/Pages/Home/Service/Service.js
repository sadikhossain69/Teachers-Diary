import './Service.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service);
    const { name, image, description } = props.service
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 g-5 p-3' >
            <div className="service-card">
                <img style={{height: '80px'}} src={image} alt="" />
                <h3>{name}</h3>
                <p>
                    {description}
                </p>
                <Link className='btn' to='/checkout' >Buy Now</Link>
            </div>
        </div>
    );
};

export default Service;