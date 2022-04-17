import './Service.css'
import React from 'react';

const Service = (props) => {

    const { name, image, description } = props.service
    
    return (
        <div>
            <h2>This is Service!!!! {name} </h2>
        </div>
    );
};

export default Service;