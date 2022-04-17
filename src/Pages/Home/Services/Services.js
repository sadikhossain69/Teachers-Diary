import './Services.css'
import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../Photos/service1.svg'
import service2 from '../../../Photos/services/service2.svg';
import service3 from '../../../Photos/services/service3.svg';
import service4 from '../../../Photos/services/service4.svg';
import service5 from '../../../Photos/services/service5.svg';
import service6 from '../../../Photos/services/service6.svg';

const Services = () => {

    const services = [
        {id: 1, name: 'Math Tuition', image: service1, price: 9.99, description: 'If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.Everything negative – pressure, challenges – is all an opportunity for me to rise.' },
        {id: 2, name: 'English Tuition', image: service2, price: 9.99, description: 'Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years.' },
        {id: 3, name: 'Bangla Tuition', image: service3, price: 9.99, description: 'This page shares my best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways.' },
        {id: 4, name: 'Accounting Tuition', image: service4, price: 9.99, description: 'You’ll find interesting articles to read on topics like how to stop procrastinating as well as personal recommendations like my list of the best books to readand my minimalist travel guide. Ready to dive in? You can use the categories below' },
        {id: 5, name: 'Physics Tuition', image: service5, price: 9.99, description: 'There are enough articles on this site to fill multiple books, so it can sometimes be daunting to know where to start. Below are what many consider to be the best articles that have been the most popular, the most shared' },
        {id: 6, name: 'Chemestry Tuition', image: service6, price: 9.99, description: ' Productivity isn’t always just a function of the hours you work. Sometimes you need to work smarter, not harder.The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways.' },
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