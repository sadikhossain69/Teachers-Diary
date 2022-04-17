import './Services.css'
import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../Photos/service1.svg'

const Services = () => {

    const services = [
        {id: 1, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
        {id: 2, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
        {id: 3, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
        {id: 4, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
        {id: 5, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
        {id: 6, name: 'Math Tuition', image: service1, price: 9.99, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit totam nisi excepturi sunt voluptates asperiores sequi beatae optio quam! Fugiat officia, maxime facere minus rerum porro quis praesentium provident in?' },
    ]

    return (
        <div className='mt-3'>
            <h2>My <span style={{color: 'skyblue'}}>Services</span></h2>
            <div className="container">
                <div className='row'>
                    {
                        services.map(service => <Service
                            key={service.id} service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;