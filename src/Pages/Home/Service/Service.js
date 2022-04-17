import './Service.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service);
    const { name, image, description, price } = props.service
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 p-3 service-container' >
            <div className="service-card">
                <img className='my-2' style={{height: '80px'}} src={image} alt="" />
                <h3>{name}</h3>
                <p>
                    {description}
                </p>
                <h4>Price: ${price}</h4>
                <Link className='btn btn-primary mb-3' to='/checkout' >Buy Now</Link>
            </div>
        </div>
    );
};

export default Service;